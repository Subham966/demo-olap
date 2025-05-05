import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
const { setErrorMessage } = chatDetailsActions;


const useStartBooking = async (data,onSuccess) => {
  try {
    const response =await client.post("/start-booking",data);
    console.log("success")
    onSuccess()
  } catch (error) {
    console.log("error")
  } finally {
    console.log("finally")
  }
};

export { useStartBooking };
