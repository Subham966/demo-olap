import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
const { setErrorMessage } = chatDetailsActions;


const stopBooking = async (conversationId) => {
  try {
    const response =await client.delete(`/stop-booking/${conversationId}`);
    console.log("success")
    onSuccess()
  } catch (error) {
    console.log("error")
  } finally {
    console.log("finally")
  }
};

export { stopBooking };
