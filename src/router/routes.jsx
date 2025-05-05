import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

import { lazy, useState } from "react";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import UploadReferral from "@/pages/UploadReferral";
import ReferralForm from "@/pages/ReferralForm";
import PregnancyQuestions from "@/pages/Questions/PregnancyQuestions";
import BotLayout from "@/layouts/botLayout/BotLayout";
import SelectCenter from "@/pages/SelectCenter";
import RegisterPhone from "@/pages/RegisterPhone/RegisterPhone";
import ScanDetails from "@/pages/ScanDetails";
import BiopsyInjection from "@/pages/ScanDetails/BiopsyInjection";
import Questions from "@/pages/Questions/Questions";
import ModalityNotAvailableAtCenterEscalation from "@/pages/EscalationErrorsPage/ModalityNotAvailableAtCenterEscalation";
import SelectSlots from "@/pages/SelectSlots";
import ConfirmAppoinment from "@/pages/ConfirmAppoinment";
import BookingCompleted from "@/pages/BookingCompleted";
import ScanList from "@/pages/ScanList";
import ProvisionalBooking from "@/pages/ProvisionalBooking";
import MedicareQuestion from "@/pages/Questions/MedicareQuestion";
import { Box } from "@mui/material";
import SelectModality from "@/pages/SelectModality";
import TriagingRules from "@/pages/TriagingRules";
import DetailsConfirmation from "@/pages/Ereferral/DetailsConfirmation";
import DOBConfirmation from "@/pages/Ereferral/DOBConfirmation";
import EreferralLandingPage from "@/pages/Ereferral/LandingPage/EreferralLandingPage";
import ConfirmEreferralAppoinment from "@/pages/ConfirmEreferralAppoinment";
import MultiCenterCalendar from "@/pages/MultiCenterCalendar";

const BookingConfirmation = lazy(() => import("../pages/BookingConfirmation"));

const FastingEscalation = lazy(() =>
  import("../pages/EscalationErrorsPage/FastingEscalation")
);

const AppRoutes = ({ setCurrentPath, eReferralWorkflow }) => {
  const CurrentPath = () => {
    const location = useLocation();

    if (eReferralWorkflow && location.pathname == "/") {
      setCurrentPath("/ereferral-confirm-dob");
    } else {
      setCurrentPath(location.pathname);
    }
  };

  return (
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Box>
              <CurrentPath />
              <BotLayout />
            </Box>
          }
        >
          <Route
            index
            element={
              <Box>
                <CurrentPath />
                {eReferralWorkflow && location.pathname == "/" ? (
                  <Box>
                    <CurrentPath />
                    <DOBConfirmation />
                  </Box>
                ) : (
                  <UploadReferral />
                )}
              </Box>
            }
          />
          <Route
            path="/ereferral-landing"
            element={
              <Box
                height="auto"
                sx={{ margin: "auto", justifyContent: "center" }}
              >
                <CurrentPath />
                <EreferralLandingPage />
              </Box>
            }
          />
          <Route
            path="/ereferral-confirm-dob"
            element={
              <Box
                height="auto"
                sx={{ margin: "auto", justifyContent: "center" }}
              >
                <CurrentPath />
                <DOBConfirmation />
              </Box>
            }
          />
          <Route
            path="/ereferral-review-details"
            element={
              <Box>
                <CurrentPath />
                <DetailsConfirmation />
              </Box>
            }
          />
          <Route
            path="/register-phone"
            element={
              <Box>
                <CurrentPath />
                <RegisterPhone />
              </Box>
            }
          />
          <Route
            path="/upload-referral"
            element={
              <Box>
                <CurrentPath />
                <UploadReferral />
              </Box>
            }
          />
          <Route
            path="/referral-form"
            element={
              <Box>
                <CurrentPath />
                <ReferralForm />
              </Box>
            }
          />
          <Route path="/scanList" element={<ScanList />} />
          <Route path="/scan-modality" element={<SelectModality />} />
          <Route
            path="/scanDetails"
            element={
              <Box>
                <CurrentPath />
                <ScanDetails />
              </Box>
            }
          />
          <Route
            path="/biopsy-injection"
            element={
              <Box>
                <CurrentPath />
                <BiopsyInjection />
              </Box>
            }
          />
          <Route
            path="/questions"
            element={
              <Box>
                <CurrentPath />
                <Questions />
              </Box>
            }
          />
          <Route
            path="/modality-not-available-at-center-escalation"
            element={
              <Box>
                <CurrentPath />
                <ModalityNotAvailableAtCenterEscalation />
              </Box>
            }
          />
          <Route
            path="/provisional-booking"
            element={
              <Box>
                <CurrentPath />
                <ProvisionalBooking />
              </Box>
            }
          />
          <Route
            path="/questions/pregnancy"
            element={
              <Box>
                <CurrentPath />
                <PregnancyQuestions />
              </Box>
            }
          />
          <Route
            path="/questions/cost"
            element={
              <Box>
                <CurrentPath />
                <MedicareQuestion />
              </Box>
            }
          />
          <Route
            path="/select-center"
            element={
              <Box>
                <CurrentPath />
                <SelectCenter />
              </Box>
            }
          />
          <Route
            path="/select-slots"
            element={
              <Box>
                <CurrentPath />
                <SelectSlots />
              </Box>
            }
          />
          <Route
            path="/multi-center-calendar"
            element={
              <Box>
                <CurrentPath />
                <MultiCenterCalendar />
              </Box>
            }
          />
          <Route
            path="/confirm-slots"
            element={
              <Box>
                <CurrentPath />
                {eReferralWorkflow ? (
                  <ConfirmEreferralAppoinment />
                ) : (
                  <ConfirmAppoinment />
                )}
              </Box>
            }
          />
          <Route
            path="/booking-completed"
            element={
              <Box>
                <CurrentPath />
                <BookingCompleted />
              </Box>
            }
          />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export { AppRoutes };
