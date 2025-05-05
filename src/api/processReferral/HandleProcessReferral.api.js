import { client } from "@/api/client";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";
import { useMutation } from "@tanstack/react-query";

const { setReferralDetails,setErrorMessage ,setLoading} = chatDetailsActions;

  const HandleProcessReferral =async (data,handleUploadReferralSuccessCallback,handleUploadReferralFailureCallback) =>{
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
      const response =await client.post("/process-referral", formData, { headers: {
          "Content-Type": "multipart/form-data",
        } });
      const sucessData=response?.data?.data
      if(response?.data?.error_code==0){
        useAppDispatch(
          setReferralDetails({
            firstName: sucessData?.first_name,
            lastName: sucessData?.last_name,
            gender: sucessData?.sex,
            dateOfBirth: sucessData?.date_of_birth,
            address: sucessData?.address,
            suburb: sucessData?.suburb,
            postCode: sucessData?.post_code,
            contactNumber: sucessData?.contact_number ? sucessData?.contact_number?.replace(/\s+/g, '') : "" ,
            dob: sucessData?.dob,
            bodyPart: sucessData?.requested_scan,
            medicare: sucessData?.medicare,
            referralFile:data?.file
          })
        );
        handleUploadReferralSuccessCallback(response?.data)
      }else{
        useAppDispatch(setErrorMessage({
          errorMessage: "Sorry, I dont find any relevant details. You can upload the document again OR select the option  'Manually enter Scan details'."
        }))
      }
      console.log("success")
    } catch (error) {
      console.log("error")
    } finally {
      console.log("finally")
      handleUploadReferralFailureCallback()
      useAppDispatch(setLoading(false))
    }
  }
export { HandleProcessReferral };
