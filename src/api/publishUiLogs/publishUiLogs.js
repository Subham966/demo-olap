import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";

const { setChatDetails, setErrorMessage, setLoading } = chatDetailsActions;
const { clearTimer } = conversationTimeoutActions;
const HandlePublishUiLogs = async (data) => {
  try {
    const response = await client.post("/logs", data);
    console.log("success")
  } catch (error) {
    console.log("error")
  } finally {
    console.log("finally")
  }
}


export { HandlePublishUiLogs };
