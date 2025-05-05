import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";

const { setChatDetails,setErrorMessage ,setLoading} = chatDetailsActions;


  const HandleGoBack =async (data) =>{
    useAppDispatch(setLoading(true))
    try {
      let url=`/go-back?conversation_id=${data?.conversationId}&target_state=${data?.targetState}`
      if(data?.targetState=="MultiCenterState"){
       url=`/go-back?conversation_id=${data?.conversationId}&target_state=${data?.targetState}&reset_event=${'GO_TO_SPECIFIC_STATE_RETAINING_CONTEXT'}`
      }
      const response =await client.put(url, data);
      const successData=response?.data
      useAppDispatch(
        setChatDetails({
          conversationId: successData.callSid || "",
          question: successData.response || "",
          responseCode: successData.information_state.response_code || [],
          modality: successData.information_state.modality || "",
          modalityGeneric: successData.information_state?.modality_generic || "",
          formatedQuestion:
            successData.information_state?.webbot_backend_keys.question_data
              ?.question?.question_text ||
            successData.information_state?.webbot_backend_keys.question_data
              ?.question_text ||
            "",
          fastingTime:
            successData?.information_state?.fasting_duration_in_min || "",
          fastingText:
            successData?.information_state?.fasting_instruction_text || "",
          botState: successData?.state || "",
          bodyPart: successData?.information_state?.bodypart || "",
          confirmedSlot:
            successData.information_state?.system_proposed_slot?.schedule || "",
          centersWhereServiceAvailable:
            successData.information_state?.centers_where_service_available || {},
          questionOptions:
            successData.information_state?.webbot_backend_keys.question_data
              ?.display_answers_options_for_BOT ||
            successData.information_state?.webbot_backend_keys.question_data
              ?.question?.display_answers_options_for_BOT ||
            [],
          safetyQuestionsCount:
            successData.information_state?.number_of_safety_questions || 0,
          additionalQuestionsCount:
            successData.information_state
              ?.number_of_additional_workflow_questions || 0,
          directReceptionNumber:
            successData.information_state?.direct_reception_number || '+61 123 456 789',
          userLastUtterance:
           successData.information_state?.user_last_utterance || 'yes',
          additionalCostingConfirmed:
           successData.information_state?.additional_costing_confirmed || false,
          useServiceRequestUtterance:
           successData.information_state?.imaging_service_request_details,
          conversationTags:
           successData.information_state?.conversation_tags || [],
          currentState:
            successData.information_state?.current_state,
          triagingQuestionOptions:
            successData.information_state?.webbot_backend_keys?.triaging_question_dict 
            ? Object.values(successData.information_state.webbot_backend_keys.triaging_question_dict)
              : [],
          asrCorrectedUtterance: successData.information_state?.asr_corrected_utterance?.toUpperCase(),
          currentInternalState:successData.information_state?.current_internal_state
        })
      );
      console.log("success")
      onSuccess()
    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
      useAppDispatch(setLoading(false))
    }
  }




export { HandleGoBack };
