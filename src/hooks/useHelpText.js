import { useSelector } from "react-redux";
import moment from "moment";

function formatBusinessHours(data) {
  const daysMap = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
  };

  // Format time using moment.js
  function formatTime(time) {
    return moment(time, "HH:mm:ss").format("h A");
  }

  const grouped = {};

  data.forEach(({ iso_weekday, business_hours_from, business_hours_to }) => {
    const hours = `${formatTime(business_hours_from)} - ${formatTime(business_hours_to)}`;
    if (!grouped[hours]) {
      grouped[hours] = [];
    }
    grouped[hours].push(iso_weekday);
  });

  function mergeConsecutiveDays(days) {
    days.sort((a, b) => a - b);
    const merged = [];
    let start = days[0], end = days[0];

    for (let i = 1; i < days.length; i++) {
      if (days[i] === end + 1) {
        end = days[i];
      } else {
        merged.push(start === end ? daysMap[start] : `${daysMap[start]} - ${daysMap[end]}`);
        start = end = days[i];
      }
    }
    merged.push(start === end ? daysMap[start] : `${daysMap[start]} - ${daysMap[end]}`);
    return merged;
  }

  return Object.entries(grouped)
    .map(([hours, days]) => `${mergeConsecutiveDays(days).join(", ")} (${hours})`)
    .join(", and on ");
}

const useHelpText = () => {
  const { workingHours } = useSelector((state) => state.chatDetails);
  return formatBusinessHours(workingHours);
};

export default useHelpText;
