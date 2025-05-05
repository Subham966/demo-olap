import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
const { setChatDetails,setErrorMessage ,setLoading,setEreferralPatientDetails} = chatDetailsActions;


const getEreferral = async (data,handleDobMatchedCallback,handleDobMatchedfallback) => {
   let {eReferralCode,DOB }=data ;
    try {
      const response =await client.get(
        `/ereferral?referrral_code=${eReferralCode}&dob=${DOB}`
      );
      let data=response?.data
      if(data?.error_code==0){
        console.log("data?.ereferral_data?.first_name",data?.ereferral_data?.first_name)
        useAppDispatch(setEreferralPatientDetails({
          firstName:data?.ereferral_data?.first_name,
          lastName:data?.ereferral_data?.last_name,
          requestedService:data?.ereferral_data?.requested_service,
          dateOfBirth: data?.ereferral_data?.dob,
          contactNumber : data?.ereferral_data?.contact_number
          }))
          handleDobMatchedCallback()
      }else{
        handleDobMatchedfallback()
      }
      return response.data
    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
    }
  };
  
export { getEreferral };
