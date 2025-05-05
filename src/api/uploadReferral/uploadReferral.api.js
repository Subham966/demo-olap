import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";
import { useMutation } from "@tanstack/react-query";

const { setReferralDetails,setErrorMessage } = chatDetailsActions;

  const UploadReferralApi =async (data,conversationId) =>{
    try {
      const formData = new FormData();
      if (data.file) {
        formData.append("file", data.file);
      }
      for (const key in data) {
        if (key !== "file") {
          formData.append(key, data[key]);
        }
      }
      const response =await client.post(`/referral-upload?conversation_id=${conversationId}`, formData, { headers: {
          "Content-Type": "multipart/form-data",
        } });
      console.log("success",response)
    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
    }
  }
export { UploadReferralApi };
