import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversationId: "",
  eReferralCode: null,
  eReferralWorkflow: false,
  question: "",
  responseCode: "",
  modality: "",
  modalityGeneric: "",
  safetyQuestions: [],
  additionalQuestion: [],
  formatedQuestion: "",
  fastingTime: "",
  botState: "",
  bodyPart: "",
  confirmedSlot: "",
  centersWhereServiceAvailable: {},
  questionOptions: [],
  triagingQuestionOptions: [],
  additionalQuestionsCount: 0,
  safetyQuestionsCount: 0,
  errorMessage: "",
  isErrorPresent: false,
  isChatbotOpen: false,
  selectedCenter: "",
  selectedSlot: "",
  firstName: "",
  lastName: "",
  date_of_birth: "",
  fastingText: "",
  gender: "",
  address: "",
  suburb: "",
  postCode: "",
  contactNumber: "",
  medicare: {},
  directReceptionNumber: "+61 123 456 789",
  userLastUtterance: "",
  additionalCostingConfirmed: false,
  additionalCostQuestion: "",
  useServiceRequestUtterance: "",
  conversationTags: [],
  pregnancyWeeks: "0 Weeks",
  pregnancyDays: "0 Days",
  restartConversationPopup: false,
  bookNewAppointmentPopup: false,
  goBackPopup: false,
  goBackPopupState: "",
  showPopup: false,
  popupScreenName: "",
  currentState: "",
  loading: false,
  requestedModality: "",
  injectionBiopsyModality: "",
  injectionBiopsyText: "",
  preparationGuidelines: null,
  goBackLoadingStatus: false,
  automationLogicLoadingStatus: false,
  isMultiCenterWorkflow: false,
  selectedCenterId: null,
  selectedCenterName: null,
  selectedCenterFullName: null,
  centersUnderVirtualCenter: [],
  referralFile: null,
  isServiceRequestChanged: false,
  asrCorrectedUtterance: "",
  currentInternalState: "",
  workingHours: [],
  provisionalBookingFlag: false,
  selectedCenterAddress: "",
  showSlotOfferPopupForWalkinMulticenterFlow: false
};

const chatDetails = createSlice({
  name: "chatDetails",
  initialState,
  reducers: {
    setConversationId: (state, action) => {
      state.conversationId = action.payload;
    },
    setScanName: (state, action) => {
      state.scanName = action.payload;
    },
    setChatDetails: (state, action) => {
      state.conversationId = action.payload.conversationId;
      state.question = action.payload.question;
      state.responseCode = action.payload.responseCode;
      state.modality = action.payload.modality;
      state.modalityGeneric = action.payload.modalityGeneric;
      state.formatedQuestion = action.payload.formatedQuestion;
      state.fastingTime = action.payload.fastingTime;
      state.fastingText = action.payload.fastingText;
      state.botState = action.payload.botState;
      state.bodyPart = action.payload.bodyPart;
      state.confirmedSlot = action.payload.confirmedSlot;
      state.centersWhereServiceAvailable = action.payload.centersWhereServiceAvailable;
      state.questionOptions = action.payload.questionOptions;
      state.additionalQuestionsCount = action.payload.additionalQuestionsCount;
      state.safetyQuestionsCount = action.payload.safetyQuestionsCount;
      state.directReceptionNumber = action.payload.directReceptionNumber;
      state.userLastUtterance = action.payload.userLastUtterance;
      state.additionalCostingConfirmed =
        action.payload.additionalCostingConfirmed;
      state.useServiceRequestUtterance =
        action.payload.useServiceRequestUtterance?.toUpperCase();
      (state.conversationTags = action.payload.conversationTags),
        (state.currentState = action.payload.currentState);
      state.triagingQuestionOptions = action.payload.triagingQuestionOptions;
      state.asrCorrectedUtterance = action.payload.asrCorrectedUtterance;
      state.currentInternalState = action.payload.currentInternalState;
    },
    addSafetyQuestion: (state, action) => {
      state.safetyQuestions.push(action.payload);
    },
    addAdditionalQuestion: (state, action) => {
      state.additionalQuestion.push(action.payload);
    },
    setChatBotOpanStatus: (state, action) => {
      state.isChatbotOpen = action.payload;
    },
    setCenterSlotDetails: (state, action) => {
      state.selectedCenter = action.payload.selectedCenter;
      state.selectedSlot = action.payload.selectedSlot;
    },
    setUserDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.date_of_birth = action.payload.date_of_birth;
      state.contactNumber = action.payload.contactNumber;
    },
    setBotState: (state, action) => {
      state.botState = action.payload.botState;
      state.responseCode = action.payload.responseCode;
    },
    setAdditionalCostQuestion: (state, action) => {
      state.additionalCostQuestion = action.payload.additionalCostQuestion;
    },
    setReferralDetails: (state, action) => {
      (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName),
        (state.gender = action.payload.gender),
        (state.date_of_birth = action.payload.dateOfBirth),
        (state.address = action.payload.address),
        (state.suburb = action.payload.suburb),
        (state.postCode = action.payload.postCode),
        (state.contactNumber = action.payload.contactNumber),
        (state.conversationId = action.payload.convId),
        (state.bodyPart = action.payload.bodyPart),
        (state.medicare = action.payload.medicare);
      (state.referralFile = action.payload.referralFile);
    },
    setRestartConversationPopup: (state, action) => {
      (state.restartConversationPopup =
        action.payload.restartConversationPopup),
        (state.isChatbotOpen = true);
    },
    setBookNewAppointmentPopup: (state, action) => {
      (state.bookNewAppointmentPopup =
        action.payload.bookNewAppointmentPopup),
        (state.isChatbotOpen = true);
    },
    setGoBackPopup: (state, action) => {
      state.goBackPopup = action.payload.goBackPopup;
      state.goBackPopupState = action.payload.goBackPopupState;
    },
    resetChatDetails: (state, action) => {
      return { ...initialState, isChatbotOpen: true, eReferralWorkflow: state.eReferralWorkflow, eReferralCode: state.eReferralCode, isMultiCenterWorkflow: state.isMultiCenterWorkflow, workingHours: state.workingHours };
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
      state.isErrorPresent = true;
    },
    setPregnancyWeeksAndDays: (state, action) => {
      state.pregnancyWeeks = action.payload.pregnancyWeeks;
      state.pregnancyDays = action.payload.pregnancyDays;
    },
    resetErrorMessage: (state, action) => {
      state.errorMessage = "";
      state.isErrorPresent = false;
    },
    setPopupScreen: (state, action) => {
      state.showPopup = action.payload.showPopup;
      state.popupScreenName = action.payload.popupScreenName;
    },
    resetPopupScreen: (state, action) => {
      state.showPopup = false;
      state.popupScreenName = "";
    },
    resetServiceRequestState: (state, action) => {
      state.safetyQuestions = [];
      state.additionalQuestion = [];
      state.pregnancyWeeks = "0 Weeks";
      state.pregnancyDays = "0 Days";
      state.selectedCenter = "";
      state.selectedCenterAddress = "";
      state.selectedSlot = "";
      state.confirmedSlot = "";
      state.requestedModality = "";
      state.injectionBiopsyModality = "";
      state.injectionBiopsyText = "";
      state.useServiceRequestUtterance = "";
      state.additionalCostingConfirmed = false;
      state.additionalCostQuestion = "";
      state.isServiceRequestChanged = true;
      slotOfferPopupForWalkinMulticenterFlow = false;
    },
    resetInformTimeState: (state, action) => {
      state.selectedSlot = "";
      state.confirmedSlot = "";
      state.safetyQuestions = [];
      state.additionalQuestion = [];
      state.additionalCostingConfirmed = false;
      state.additionalCostQuestion = "";
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRequestedModality: (state, action) => {
      state.requestedModality = action.payload;
    },
    setInjectionBiopsyModalityText: (state, action) => {
      state.injectionBiopsyModality = action.payload.injectionBiopsyModality;
      state.injectionBiopsyText = action.payload.injectionBiopsyText;
    },
    setPreparationGuidelinesText: (state, action) => {
      state.preparationGuidelines = action.payload;
    },
    setEreferralDetails: (state, action) => {
      state.eReferralCode = action.payload;
      state.eReferralWorkflow = true;
      state.isChatbotOpen = true;

    },
    resetEreferralDetails: (state, action) => {
      state.eReferralCode = null;
      state.eReferralWorkflow = false;
    },
    setEreferralPatientDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.requestedModality = action.payload.requestedService;
      state.date_of_birth = action.payload.dateOfBirth;
      state.contactNumber = action.payload.contactNumber;
    },
    setGoBackLoadingStatus: (state, action) => {
      state.goBackLoadingStatus = action.payload
    },
    setAutomationLogicLoadingStatus: (state, action) => {
      state.automationLogicLoadingStatus = action.payload
    },
    setIsMultiCenterWorkflow: (state, action) => {
      state.isMultiCenterWorkflow = true;
    },
    resetIsMultiCenterWorkflow: (state, action) => {
      state.isMultiCenterWorkflow = false;
    },
    setSelectedCenterWorkflow: (state, action) => {
      state.selectedCenterId = action.payload.centerId;
      state.selectedCenterName = action.payload.centerName;
      state.selectedCenterFullName = action.payload.centerFullName;
      state.centersUnderVirtualCenter = action.payload.centersUnderVirtualCenter;
    },
    updateVirtualCenterListWorkflow: (state, action) => {
      state.centersUnderVirtualCenter = action.payload.centersUnderVirtualCenter;
    },
    updateSelectedCenterWorkflow: (state, action) => {
      state.selectedCenterId = action.payload.centerId;
      state.selectedCenterName = action.payload.centerName;
      state.selectedCenterFullName = action.payload.centerFullName;
      state.selectedCenterAddress = action.payload.centerAddress;
    },
    resetSelectedCenterWorkflow: (state, action) => {
      state.selectedCenterId = null;
      state.selectedCenterName = null;
      state.selectedCenterFullName = null;
    },
    setWorkingHours: (state, action) => {
      state.workingHours = action.payload.workingHours;
    },
    // If no slot data is found, consider this as a provisional booking.
    setProvisionalBooking: (state, action) => {
      state.provisionalBookingFlag = action.payload;
    },
    setShowSlotOfferPopupForWalkinMulticenterFlow: (state, action) => {
      // This variable checks whether a slot needs to be offered for walk-ins in the multicenter flow.
      // After showing the slot offer once, the second time we don't receive any code from the backend , so for that be maintain in it,
      // UI will automatically handle the by using this.
      state.showSlotOfferPopupForWalkinMulticenterFlow = action.payload;
    },
  },
});

const chatDetailsActions = chatDetails.actions;

const chatDetailsReducer = chatDetails.reducer;

export { chatDetailsReducer, chatDetailsActions };
