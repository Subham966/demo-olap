import { client } from "@/api/client";

import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
const { setErrorMessage, setPreparationGuidelinesText, setPopupScreen } = chatDetailsActions;
const { clearTimer } = conversationTimeoutActions;

const useCompleteBooking = async (data) => {
  try {
    const response = await client.post("/complete-booking", {
      conversation_id: data.conversationId,
      first_name: data.firstName,
      last_name: data.lastName,
      date_of_birth: data.dob,
      contact_number:data.contact_number
    });
    console.log("response",response);
    if(response.data.error_code==1003){
        useAppDispatch(
            setPopupScreen({
              showPopup: true,
              popupScreenName: "SlotGetsBooked",
            })
          );
          return;
    //   useAppDispatch(
    //     setErrorMessage({
    //       errorMessage: response?.data.error_message
    //     })
    //   );

    }
    if(response.data.error_code==0){

    useAppDispatch(clearTimer());
    useAppDispatch(
      setPreparationGuidelinesText(response?.data.preparation_guideline_text)
    );
  }
    return response.data;
  } catch (error) {
    let error_utterance =
      "Error While processing your request. Please try again.";
    if (error?.message == "Network Error") {
      error_utterance = `${error?.message}.Please check your internet connection and try again.`;
    }
    // useAppDispatch(
    //   setErrorMessage({
    //     errorMessage: error_utterance
    //   })
    // );
    console.error("Error handling utterance:", error_utterance, error);
  }
};

export { useCompleteBooking };
