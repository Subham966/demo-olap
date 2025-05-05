import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useSelector } from "react-redux";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { CustomTextField } from "@/elements/CustomTextField";
import { useForm } from "react-hook-form";
import {
  ButtonContainerMobile,
  ContainerMobile,
  CustomContainerMobile,
  CustomaCssButtonMobile,
  HeadingContainerMobile,
  HeadingTextMobile,
} from "./InputEscalation.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomContainerDesktop,
  CustomaCssButtonDesktop,
  HeadingContainerDesktop,
  HeadingTextDesktop,
} from "./InputEscalation.desktop.style";

const InputEscalation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [textFieldValue, setTextFieldValue] = useState("");
  const { resetPopupScreen, setAutomationLogicLoadingStatus } =
    chatDetailsActions;
  const { conversationId, asrCorrectedUtterance, responseCode, question } =
    useSelector((state) => state.chatDetails);
  const handleChange = (e) => {
    const currentValue = e?.target?.value?.toUpperCase();
    setTextFieldValue(currentValue);
  };
  const defaultValues = {
    value: "",
  };
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomContainerWrapper = isMobile
    ? CustomContainerMobile
    : CustomContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const HeadingContainerWrapper = isMobile
    ? HeadingContainerMobile
    : HeadingContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  return (
    <ContainerWrapper>
      <CustomContainerWrapper
        sx={{
          backgroundColor: "white",
          boxShadow: 24,
        }}
      >
        <HeadingContainerWrapper>
          <HeadingTextWrapper color={theme.palette.primary.activeButton}>
            <Box
              dangerouslySetInnerHTML={{
                __html: `${question}`,
              }}
            />
          </HeadingTextWrapper>
        </HeadingContainerWrapper>
        <ButtonContainerWrapper>
          <CustomTextField
            height={"45px"}
            onChange={(e) => {
              handleChange(e);
            }}
            fullWidth
            control={control}
            isFormControl
            errors={errors}
            name="value"
          ></CustomTextField>
          <Box sx={{ margin: "auto", width: "100px" }}>
            <CustomaCssButtonWrapper
              sx={{
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: "black",
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                },
              }}
              onClick={async () => {
                useAppDispatch(resetPopupScreen());
                // setIsHandleUtteranceApiPending(true);
                useAppDispatch(setAutomationLogicLoadingStatus(true));
                await useHandleUtterance({
                  conversation_id: conversationId,
                  utterance: textFieldValue,
                });
                // setIsHandleUtteranceApiPending(false);
                useAppDispatch(setAutomationLogicLoadingStatus(false));
              }}
            >
              Submit
            </CustomaCssButtonWrapper>
          </Box>
        </ButtonContainerWrapper>
      </CustomContainerWrapper>
    </ContainerWrapper>
  );
};

export default InputEscalation;
