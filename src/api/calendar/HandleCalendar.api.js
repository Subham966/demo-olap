import { client } from "../client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import moment from "moment";
const { setErrorMessage } = chatDetailsActions;

const useGetAvailabilityCalendar = async ({ conversationId, centerId, start_date, end_date }, signal) => {
  if (signal?.aborted) {
    return { data: { aborted: true } };
  }
  let url = `/GetAvailabilityCalendar?conversation_id=${conversationId}&center_id=${centerId}`;

  if (start_date && end_date) {
    url = `/GetAvailabilityCalendar?conversation_id=${conversationId}&center_id=${centerId}&start_date=${start_date}&end_date=${end_date}`;
  } else if (start_date) {
    const endDate = moment(start_date).add(1, "month").format("YYYY-MM-DD");
    url = `/GetAvailabilityCalendar?conversation_id=${conversationId}&center_id=${centerId}&start_date=${start_date}&end_date=${endDate}`;

  } else {
    const startDate = moment().format("YYYY-MM-DD");
    const endDate = moment().add(1, "month").format("YYYY-MM-DD");
    url = `/GetAvailabilityCalendar?conversation_id=${conversationId}&center_id=${centerId}&start_date=${startDate}&end_date=${endDate}`;
  }
  try {
    const response = await client
      .get(
        url, signal
      )
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    let error_utterance =
      "Error While processing your request. Please try again.";
    if (error?.message == "Network Error") {
      error_utterance = `${error?.message}.Please check your internet connection and try again.`;
    }
  }
};




const getAvailabilitySlots = async ({
  conversationId,
  queryDate,
  centerId,
}) => {
  try {
    const response = await client
      .get(
        `GetAvailabilitySlots/${conversationId}?query_date=${queryDate}&center_id=${centerId}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        let error_utterance =
          "Error While processing your request. Please try again.";
        if (error?.message == "Network Error") {
          error_utterance = `${error?.message}.Please check your internet connection and try again.`;
        }
        console.error("Error handling utterance:", error_utterance, error);
      });
    return response;
  } catch (error) { }
};



const fetchAvailableCenters = async ({
  conversationId,
  latitude,
  longitude,
}) => {
  const baseString = `centers?conversation_id=${conversationId}${latitude && longitude ? `&user_latt=${latitude}&user_long=${longitude}` : ""
    }`;

  const response = await client
    .get(baseString)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      let error_utterance =
        "Error While processing your request. Please try again.";
      if (error?.message == "Network Error") {
        error_utterance = `${error?.message}.Please check your internet connection and try again.`;
      }
      console.error("Error handling utterance:", error_utterance, error);
    });
  return response.data;
};

export {
  useGetAvailabilityCalendar,
  getAvailabilitySlots,
  fetchAvailableCenters,
};
