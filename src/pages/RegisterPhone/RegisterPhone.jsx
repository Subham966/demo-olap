import { Box, Stack, Typography, InputAdornment, Grid } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import SearchArrow from "@/assets/SearchArrow.svg";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import { COLORS } from "@/theme";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useTheme } from "@emotion/react";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { useStartBooking } from "@/api/startBooking/StartBooking.api";

function RegisterPhone() {
  const theme = useTheme();
  const [isStartBookingApiPending,setIsStartBookingApiPending]=useState(false)
  const [isHandleUtteranceApiPending,setIsHandleUtteranceApiPending]=useState(false)
  const {
    mutate,
    isHandleUtteranceApiPending: isBookingPending,
    error: bookingError,
  } = useStartBooking();
  const [inputMobileNumber, setInputMobileNumber] = useState("");
  const [effectActive, setEffectActive] = useState(false);
  const [clickedButtonValue, setClickedButtonValue] = useState("");
  const navigate = useNavigate();

  const numbers_obj = [
    { digit: "1", alphabet: "" },
    { digit: "2", alphabet: "ABC" },
    { digit: "3", alphabet: "DEF" },
    { digit: "4", alphabet: "GHI" },
    { digit: "5", alphabet: "JKL" },
    { digit: "6", alphabet: "MNO" },
    { digit: "7", alphabet: "PQRS" },
    { digit: "8", alphabet: "TUV" },
    { digit: "9", alphabet: "WXYZ" },
    { digit: " ", alphabet: "" },
    { digit: "0", alphabet: "" },
  ];

  const centerDetails = useSelector((state) => state.centerDetails);

  const generateUUID = () => {
    const uuid = uuidv4();
    return uuid;
  };

  const addMobileNumberInput = (value) => {
    if (inputMobileNumber?.length < 10) {
      let inputValue = inputMobileNumber + value;
      setInputMobileNumber(inputValue);
      // if (inputValue?.length == 9) {
      //   handleStartBooking(inputValue);
      // }
    }
  };

  const RemoveMobileNumberInput = () => {
    if (inputMobileNumber?.length !== 0) {
      const updatedNumber = inputMobileNumber.slice(0, -1);
      setInputMobileNumber(updatedNumber);
    }
  };

  document.onkeydown = function (evt) {
    // Normalize the event key for compatibility
    evt = evt || window.event;

    // Check if the pressed key is a number or 'Backspace'
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(evt.key)) {
      addMobileNumberInput(evt.key);
      handleClick();
      setClickedButtonValue(evt.key);
    } else if (evt.key === "Backspace") {
      RemoveMobileNumberInput(evt.key);
      handleClick();
      setClickedButtonValue("");
    }
    if (inputMobileNumber?.length == 10 && evt.key=="Enter") {
      handleStartBooking(inputMobileNumber);
    }
  };

  const handleClick = () => {
    setEffectActive(true);
    // Deactivate the effect after .2 second (200 milliseconds)
    setTimeout(() => {
      setEffectActive(false);
    }, 200);
  };



  const handleStartBooking=async(phoneNumber)=>{

    const conversation_id= generateUUID() ;

    let data = {
      conversation_id: conversation_id,
      contact_number: phoneNumber.toString(),
      center_id: centerDetails.center_id,
    }

      const handleUtteranceCallBack=()=>{
        navigate("/scanList");
      }

      const onSuccess= async()=>{
        setIsHandleUtteranceApiPending(true)
        await useHandleUtterance(
          {
            conversation_id:conversation_id,
            utterance: "yes",
          },
          handleUtteranceCallBack);
          setIsHandleUtteranceApiPending(false)
      } 

      setIsStartBookingApiPending(true)
      await useStartBooking(data,onSuccess)
      setIsStartBookingApiPending(false)
    }

    // useEffect(()=>{
  //    handleStartBooking("9009474709"); 
  // },[])


  return (
    <Stack>
      <Stack
        marginX={{
          xs: "0px",
          md: "46px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: {
              xs: "left",
              md: "center",
            },
            paddingTop: "10px",
          }}
        >
          Register Phone
        </Typography>
        <Box width="100%" marginBottom="30px" marginTop="40px">
          <Box
            sx={{
              marginLeft: {
                xs: "5px",
                md: "7px",
              },
              fontSize: {
                xs: "17px",
                md: "22px",
              },
            }}
          >
            Please provide your phone number
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                height: "50px",
                weight: "80",
                fontSize: "20px",
                padding: "10px",
                border: "1px solid lightblue",
                borderRadius: "5px",
                backgroundColor: COLORS.GREY_2,
                width: "100%",
              }}
            >
              {inputMobileNumber}
            </Box>
            <Box
              sx={{
                width: "5%",
                margin: "auto",
                marginLeft: "-50px",
                marginTop: "12px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (inputMobileNumber?.length == 10) {
                  handleStartBooking(inputMobileNumber);
                }
              }}
            >
              <img width={"25px"} src={SearchArrow} />
            </Box>
          </Box>
          {(bookingError) && (
            <Stack marginTop="20px" alignItems="center">
              <ErrorState />
            </Stack>
          )}

          <Stack marginTop="20px" alignItems="center">
            {(isHandleUtteranceApiPending || isBookingPending) && <LoaderDots />}
          </Stack>

          <Stack width="100%" alignItems="center">
            <Box
              sx={{
                textAlign: {
                  xs: "left",
                  md: "center",
                },
                // position: "absolute",
                // top: "55%",
                // bottom: "0%",
                // left: "0%",
                width: { md: "50%", xs: "100%" },
                backgroundColor: "#D8DADE",
              }}
              marginTop="70px"
            >
              <Grid container spacing={0.5} padding={"10px"}>
                {numbers_obj.map((digitObj, index) => (
                  <Grid
                    item
                    key={index}
                    xs={4}
                    sm={4}
                    md={4}
                    display="flex"
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                  >
                    <Box
                      height="65px"
                      width="150px"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        cursor: "pointer",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: theme.palette.text.activeButtonText,
                        borderRadius: "5px",
                        transition: "background-color 0.3s ease",
                        backgroundColor:
                          clickedButtonValue == digitObj.digit
                            ? effectActive
                              ? "lightgray"
                              : index != 9
                              ? theme.palette.primary.activeButton
                              : "none"
                            : index != 9
                            ? theme.palette.primary.activeButton
                            : "none",
                        "&:hover": {
                          backgroundColor:
                            clickedButtonValue == digitObj.digit
                              ? effectActive
                                ? "lightgray"
                                : index != 9
                                ? theme.palette.primary.activeButton
                                : "none"
                              : index != 9
                              ? theme.palette.primary.activeButton
                              : "none",
                        },
                      }}
                      onClick={() => {
                        if (index != 9) {
                          addMobileNumberInput(digitObj.digit);
                          handleClick();
                          setClickedButtonValue(digitObj.digit);
                        }
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          position: "relative",
                          top: "10px",
                          height: "65px",
                          width: "100%",
                          fontWeight: "500",
                          padding: "0px",
                        }}
                      >
                        {digitObj.digit}
                      </Typography>
                      {/* <Typography variant="body2"
                      sx={{
                        fontSize: "11px",
                        width: "100%",
                        fontWeight: "500",
                        marginTop: "-20px",
                        color: "gray"
                      }}
                    >{digitObj.alphabet}</Typography> */}
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={4} sm={4} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      height: "65px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      borderRadius: "5px",
                      transition: "background-color 0.3s ease",
                      cursor: "pointer",
                      backgroundColor:
                        clickedButtonValue == ""
                          ? effectActive
                            ? "lightgray"
                            : "none"
                          : "none",
                      "&:hover": {
                        backgroundColor:
                          clickedButtonValue == ""
                            ? effectActive
                              ? "lightgray"
                              : "none"
                            : "none",
                      },
                    }}
                    onClick={() => {
                      RemoveMobileNumberInput();
                      handleClick();
                      setClickedButtonValue("");
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        position: "relative",
                        top: "10px",
                        height: "65px",
                        width: "100%",
                        fontWeight: "500",
                      }}
                    >
                      <BackspaceOutlinedIcon
                        style={{
                          fill: theme.palette.primary.activeButton,
                          fontSize: "50px",
                        }}
                        width="200px"
                      />
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
        {/* <CustomButton
          onClick={handleSubmit(handleStartBooking)}
          sx={{ width: "100px" }}
        >
          Next
        </CustomButton> */}
      </Stack>
    </Stack>
  );
}

export default RegisterPhone;
