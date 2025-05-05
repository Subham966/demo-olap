import { appStore } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";
import { shakeActions } from "@/redux/reducers/shakeReducer/ShakeSlice";
import axios from "axios";
import { HandlePublishUiLogs } from "./publishUiLogs/publishUiLogs";

const { setNetworkErrorCount, setApplicationErrorCount, setTimeoutErrorCount, resetNetworkErrorCount, resetTimeoutErrorCount, resetNetworkErrorState } = errorDetailsActions;
const { setErrorMessage, resetErrorMessage, setGoBackLoadingStatus, setPopupScreen } = chatDetailsActions

const { setShake } = shakeActions;
const { startTimer, clearTimer } = conversationTimeoutActions;
export const REFERRAL_UPLOAD_URL = process.env.VITE_BASE_URL
export const KIOSK_API_URL = `${process.env.VITE_BASE_URL}/kiosk/api/v1`;
const client = axios.create({ baseURL: KIOSK_API_URL, timeout: 40000 }); // 20 seconds

const getState = () => appStore.getState();

client.interceptors.request.use(
  (config) => {
    appStore.dispatch(setGoBackLoadingStatus(true))

    if (config.url?.includes("/process-referral")) {
      config.timeout = 90000;
    }
    if (config.url?.includes("/referral/upload/files")) {
      config.baseURL = REFERRAL_UPLOAD_URL;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseSuccessHandler = (response) => {
  // listOfEndpointWhereStartTimer starts: This list contains all endpoints where, upon a successful API call, the conversation progresses.
  let listOfEndpointWhereStartTimer = ["/handle-utterance", "/start-booking", "/smart-booking", "/go-back", "/update-center", "/provisional-booking"]

  // listOfEndpointWhereClearTimer starts: This list contains all endpoints where, upon a successful API call, the conversation close.
  let listOfEndpointWhereClearTimer = ["/static-data", "/complete-booking", "/stop-booking"]

  if (
    !response?.request?.responseURL ||
    listOfEndpointWhereStartTimer.some(api => response.request.responseURL.includes(api))
  ) {
    appStore.dispatch(startTimer());
  } else if (
    !response?.request?.responseURL ||
    listOfEndpointWhereClearTimer.some(api => response.request.responseURL.includes(api))
  ) {
    appStore.dispatch(clearTimer());
  }
  appStore.dispatch(resetErrorMessage());
  appStore.dispatch(setGoBackLoadingStatus(false))
  appStore.dispatch(resetNetworkErrorState());
  return response;
};

const HandlePublishUiLogsHandler = (conversationId, utterance) => {
  HandlePublishUiLogs({
    conversation_id: conversationId,
    utterance: utterance,
  });
}
const responseErrorHandler = (error) => {
  console.log("Interceptors Error", error)
  const { errorDetails, chatDetails } = getState();
  let conversation_id = chatDetails?.conversationId;
  let listOfEndpointWhereDontShowErrorPopup = ["/logs", "/browser-tab-closed"]
  if (listOfEndpointWhereDontShowErrorPopup.some(api => error?.request?.responseURL?.includes(api))) {
    return Promise.reject(error);
  }

  let listOfEndpointWhereNotPublishErrorLogs = ["/static-data", "/start-booking"]
  let publishLogs = !listOfEndpointWhereNotPublishErrorLogs.some(api => error?.request?.responseURL?.includes(api))

  if (["/GetAvailabilityCalendar", "/GetAvailabilitySlots"].some(api => error?.request?.responseURL?.includes(api)) && error?.response?.status === 500) {
    if (publishLogs) {
      if (["/GetAvailabilityCalendar", "/GetAvailabilitySlots"].some(api => error?.request?.responseURL?.includes(api))) {
        HandlePublishUiLogsHandler(conversation_id, `Application Error: An error occurred while fetching slots.`)
      } else {
        HandlePublishUiLogsHandler(conversation_id, `Application Error`)
      }
    }
    appStore.dispatch(setErrorMessage({
      errorMessage: "There is a Application Error. You can try again after sometime."
    }));
  } else if (error?.response?.status === 404) {
    let details = error?.response?.data?.detail
    if (details) {
      appStore.dispatch(setPopupScreen({
        showPopup: true,
        popupScreenName: 'ConversationNotFound'
      }));
    } else {
      appStore.dispatch(setNetworkErrorCount());
      appStore.dispatch(setErrorMessage({
        errorMessage: "There is a HTTP Error. You can try again after sometime."
      }));
    }
  } else if (error?.response?.status === 500) {
    appStore.dispatch(setApplicationErrorCount());
    appStore.dispatch(setErrorMessage({
      errorMessage: "There is a Application Error. You can try again after sometime."
    }));
  } else if (error?.response?.status === 422) {
    appStore.dispatch(setApplicationErrorCount());
    appStore.dispatch(setErrorMessage({
      errorMessage: "There is a Application Error. You can try again after sometime."
    }));
  } else if (error?.code === 'ERR_NETWORK') {
    appStore.dispatch(setShake(true))
    appStore.dispatch(setNetworkErrorCount());
    // appStore.dispatch(setErrorMessage({
    //   errorMessage: "There is a Network Error. You can try again after sometime."
    // }));

  } else if (error?.code === 'ECONNABORTED') {
    appStore.dispatch(setTimeoutErrorCount());
    appStore.dispatch(setErrorMessage({
      errorMessage: "There is a Timeout Error. You can try again after sometime."
    }));

  } else {
    appStore.dispatch(setApplicationErrorCount());
    appStore.dispatch(setErrorMessage({
      errorMessage: "There is a Application Error. You can try again after sometime."
    }));

  }
  appStore.dispatch(setGoBackLoadingStatus(false))
  return Promise.reject(error);
};

client.interceptors.response.use(
  (response) => {
    appStore.dispatch(resetNetworkErrorState());
    return responseSuccessHandler(response);
  },
  (error) => {
    return responseErrorHandler(error);
  }
);

export { client };
