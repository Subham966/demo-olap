import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";

const { setChatDetails,setErrorMessage,setLoading } = chatDetailsActions;


  const HandleUpdateCenter =async (data,handleUpdateCenterCallback) =>{
    useAppDispatch(setLoading(true))
    const {conversation_id,center_id}=data
    try {
      await client.put(`/update-center?conversation_id=${conversation_id}&center_id=${center_id}`);
      await handleUpdateCenterCallback()
      console.log("success")

    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
      useAppDispatch(setLoading(false));
    }
  }


export { HandleUpdateCenter };
