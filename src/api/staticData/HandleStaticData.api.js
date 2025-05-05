import { client } from "../client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
const { setErrorMessage, setIsMultiCenterWorkflow, setWorkingHours } = chatDetailsActions;
import { setCenterDetails } from "@/redux/reducers/centerDetails";
import { setTheme } from "@/redux/reducers/multiTheme";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
const { setTimeoutTime } = conversationTimeoutActions;

const useGetStaticData = async (webbot_uid) => {
  try {
    const response = await client.get(`/static-data?uid=${webbot_uid}`);
    let data = response?.data;

    const publicNumber = data?.center?.public_number;
    let formattedNumber = "";
    if (publicNumber?.startsWith('+91')) {
      formattedNumber = `(+91) ${publicNumber.slice(3, 8)} ${publicNumber.slice(8)}`;
    } else if (publicNumber?.startsWith('+61')) {
      formattedNumber = `(0${publicNumber.slice(3, 4)}) ${publicNumber.slice(4, 8)} ${publicNumber.slice(8)}`;
    } else if (publicNumber?.startsWith('0')) {
      formattedNumber = `(0${publicNumber.slice(1, 2)}) ${publicNumber.slice(2, 6)} ${publicNumber.slice(6)}`;
    } else if (publicNumber?.startsWith('61')) {
      formattedNumber = `(0${publicNumber.slice(1, 2)}) ${publicNumber.slice(2, 6)} ${publicNumber.slice(6)}`;
    } else {
      formattedNumber = publicNumber
    }
    let email_data = { [data?.center_id]: "hello@imaging.com" };
    if (formattedNumber) {
      useAppDispatch(setCenterDetails({ ...data?.center, public_number: formattedNumber, email: data?.email ? data?.email : email_data }));
    } else {
      useAppDispatch(setCenterDetails(data?.center));
    }
    useAppDispatch(setTheme(data?.webbot_theme));
    useAppDispatch(setTimeoutTime({ timeOut: data?.ideal_timeout }));
    useAppDispatch(setWorkingHours({ workingHours: data?.working_hours }));
    { data?.center?.center_id >= 10000 && useAppDispatch(setIsMultiCenterWorkflow(true)) }

    return response.data;
  } catch (error) {
    console.log("error");
  } finally {
    console.log("finally");
  }
};

export { useGetStaticData };
