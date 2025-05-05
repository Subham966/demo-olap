import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";

const { setChatDetails,setErrorMessage,setLoading } = chatDetailsActions;


  const HandleSendUploadReferralLink =async (data) =>{
    useAppDispatch(setLoading(true))
    const {conversation_id}=data
    try {
      await client.put(`/send-upload-referral-link?conversation_id=${conversation_id}`);
      console.log("success")

    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
      useAppDispatch(setLoading(false));
    }
  }


export { HandleSendUploadReferralLink };
