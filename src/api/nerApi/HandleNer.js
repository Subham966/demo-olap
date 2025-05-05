import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";

const { setChatDetails,setErrorMessage ,setLoading} = chatDetailsActions;


const HandleNer = async ({
  scan
  }) => {
    try {
      const response =await client.get(
        `ner?scan=${scan}`
      );
      return response.data
    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
    }
  };
  
export { HandleNer };
