import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { CustomButton } from "@/elements/CustomButton";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { COLORS } from "@/theme";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { HandleUpdateCenter } from "@/api/updateCenter/HandleUpdateCenter.api";
import CenterSlotTimeRange from "./CenterSlotTimeRange";
import { CenterNameText, SlotsContainer } from "./MultiCenterCalendar.style";

function SlotsList({
  center,
  selectedFilter,
  otherCenterLoading,
  loading,
  selectedDate,
}) {
  const curr = useSelector((state) => state.chatDetails);
  const { setChatDetails, setCenterSlotDetails, updateSelectedCenterWorkflow } =
    chatDetailsActions;
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [dateTime, setDateTime] = useState();
  const [centerDetails, setCenterDetails] = useState();
  const { screenHeight } = useSelector((state) => state.screenSize);

  const filterTimes = (times, filterValue) => {
    switch (filterValue) {
      case "8 AM - 12 PM":
        return times?.filter((time) => {
          const tempM = moment(time?.schedule).format("hh:mm A");
          const m = moment(tempM, "hh:mm A");
          return m.isBetween(
            moment("00:00 AM", "hh:mm A"),
            moment("12:00 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "12 PM - 3 PM":
        return times?.filter((time) => {
          const tempM = moment(time?.schedule).format("hh:mm A");
          const m = moment(tempM, "hh:mm A");

          return m.isBetween(
            moment("12:00 PM", "hh:mm A"),
            moment("03:00 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "3 PM - 6 PM":
        return times?.filter((time) => {
          const tempM = moment(time?.schedule).format("hh:mm A");
          const m = moment(tempM, "hh:mm A");

          return m.isBetween(
            moment("03:00 PM", "hh:mm A"),
            moment("11:59 PM", "hh:mm A"),
            null,
            "[)"
          );
        });
      case "Any":
      default:
        return times;
    }
  };
  const handleUtteranceCallBack = async () => {
    await useHandleUtterance({
      conversation_id: curr.conversationId,
      utterance: "yes",
    });
  };

  const handleCofirmSlot = async () => {
    const combinedDateTime = selectedDate + " " + selectedSlot;
    const formattedDateTime = moment(dateTime, "YYYY-MM-DD hh:mm A").format(
      "DD MMMM [at] h:mm A"
    );

    useAppDispatch(
      setCenterSlotDetails({
        selectedCenter: centerDetails,
        selectedSlot: combinedDateTime,
      })
    );

    const handleUpdateCenterCallback = async () => {
      await useHandleUtterance(
        {
          conversation_id: curr.conversationId,
          utterance: `${formattedDateTime}`,
        },
        handleUtteranceCallBack
      );
    };
    setIsHandleUtteranceApiPending(true);

    try {
      await HandleUpdateCenter(
        {
          conversation_id: curr.conversationId,
          center_id: center?.centerId,
        },
        handleUpdateCenterCallback
      );
      useAppDispatch(
        updateSelectedCenterWorkflow({
          centerId: center?.centerId,
          centerName: center?.centerName,
          centerAddress: center?.centerName,
          centerFullName: centerData?.center_name,
        })
      );
    } catch (error) {
      console.error("Error during API flow:", error);
    } finally {
      setIsHandleUtteranceApiPending(false);
    }
  };

  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDate]);
  return (
    <Box alignItems="center" marginTop="20px">
      <Stack
        bgcolor={COLORS.GREY_2}
        p="10px"
        borderRadius="5px"
        boxShadow={`rgba(0, 0, 0, 0.02) 0px 0px 0px 1px`}
      >
        <CenterNameText>{center?.centerName}</CenterNameText>

        {otherCenterLoading || loading ? (
          <Stack
            alignItems="left"
            justifyContent="center"
            textAlign={"left"}
            width="100%"
            height="100px"
          >
            <Box
              sx={{
                display: isSmUp ? "flex" : "grid",
                gap: "5px",
                marginLeft: "10px",
              }}
            >
              <Box
                fontSize={
                  isSmUp ? (screenHeight < 900 ? "14px" : "18px") : "14px"
                }
              >
                {`Loading the Slots availability for '${center?.centerName}'`}
              </Box>
              <Box>
                <LoaderDots
                  sx={{
                    width: "30px",
                    marginTop: "10px",
                    marginX: !isSmUp && "auto",
                  }}
                />
              </Box>
            </Box>
          </Stack>
        ) : center?.availability?.length > 0 ? (
          <Stack marginTop="15px">
            {(selectedFilter == "Any" || selectedFilter == "8 AM - 12 PM") && (
              <CenterSlotTimeRange
                filteredSlote={filterTimes(
                  center?.availability,
                  "8 AM - 12 PM"
                )}
                selectedFilter={selectedFilter}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                center={center}
                setCenterDetails={setCenterDetails}
                setDateTime={setDateTime}
              />
            )}
            {filterTimes(center?.availability, "12 PM - 3 PM")?.length > 0 &&
              selectedFilter == "Any" && (
                <Box
                  sx={{
                    width: "99%",
                    marginY: screenHeight < 900 ? "5px" : "10px",
                  }}
                ></Box>
              )}
            {(selectedFilter == "Any" || selectedFilter == "12 PM - 3 PM") && (
              <CenterSlotTimeRange
                filteredSlote={filterTimes(
                  center?.availability,
                  "12 PM - 3 PM"
                )}
                selectedFilter={selectedFilter}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                center={center}
                setCenterDetails={setCenterDetails}
                setDateTime={setDateTime}
              />
            )}
            {filterTimes(center?.availability, "12 PM - 3 PM")?.length > 0 &&
              selectedFilter == "Any" && (
                <Box
                  sx={{
                    width: "99%",
                    marginY: screenHeight < 900 ? "5px" : "10px",
                  }}
                ></Box>
              )}
            {(selectedFilter == "Any" || selectedFilter == "3 PM - 6 PM") && (
              <CenterSlotTimeRange
                filteredSlote={filterTimes(center?.availability, "3 PM - 6 PM")}
                selectedFilter={selectedFilter}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                center={center}
                setCenterDetails={setCenterDetails}
                setDateTime={setDateTime}
              />
            )}
          </Stack>
        ) : (
          <Stack alignItems="start" justifyContent="start" width="100%">
            {center?.availability?.length == 0 && (
              <SlotsContainer
                fontSize={
                  isSmUp ? (screenHeight < 900 ? "12px" : "18px") : "14px"
                }
              >
                {" "}
                No available slots available in the selected{" "}
                {selectedFilter == "Any" ? "date" : "time range"}
              </SlotsContainer>
            )}
          </Stack>
        )}
        {selectedSlot && (
          <Stack
            direction="row"
            justifyContent="center"
            gap="8px"
            marginTop="10px"
          >
            <CustomButton
              sx={{
                height: isSmUp ? "32.4px" : "27px",
                width: isSmUp ? "86.4px" : "72px",
                fontSize: "12px !important",
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                "&:hover": !isHandleUtteranceApiPending && {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
              onClick={handleCofirmSlot}
              disabled={
                isHandleUtteranceApiPending
                  ? isHandleUtteranceApiPending
                  : !selectedSlot
              }
            >
              {isHandleUtteranceApiPending ? <LoaderDots /> : "Confirm"}
            </CustomButton>
            <CustomButton
              sx={{
                height: isSmUp ? "32.4px" : "27px",
                width: isSmUp ? "86.4px" : "72px",
                fontSize: "12px !important",
                fontWeight: "400",
                lineHeight: "20px",
              }}
              onClick={() => setSelectedSlot(null)}
            >
              Close
            </CustomButton>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

export default SlotsList;
