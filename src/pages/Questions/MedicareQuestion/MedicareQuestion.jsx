import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import NoFood from "@/assets/NoFood.svg";
import NoDrinks from "@/assets/NoDrinks.svg";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/elements/CustomButton";
import { useSelector } from "react-redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";

function MedicareQuestion() {
  const navigate = useNavigate();
  const curr = useSelector((state) => state.chatDetails);
  const centerDetails = useSelector((state) => state.centerDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] = useState(false)
  const { setChatDetails } = chatDetailsActions;

  const formatedQuestion = curr.question.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <Stack>
      <Stack marginTop="77px">
        <Typography textAlign="center" fontSize="22.5px" fontWeight="400">
          {formatedQuestion}
        </Typography>
      </Stack>
      <Typography
        marginTop="20px"
        fontSize="14px"
        fontWeight="500"
        color="#939393"
        textAlign="center"
      ></Typography>
      <Stack marginTop="61px" alignItems="center">
        <CustomButton
          onClick={async () => {
            setIsHandleUtteranceApiPending(true)
            await useHandleUtterance({
              conversation_id: curr.conversationId,
              utterance: "yes",
            });
            setIsHandleUtteranceApiPending(false)

          }}
          sx={{
            width: "128px",
            "&:hover": {
              color: "blue",
              border: "1px solid blue",
            },
          }}
        >
          Proceed
        </CustomButton>
      </Stack>

      <Stack marginTop="199px" alignItems="center">
        <Stack width="300px">
          <Typography color="black">Note</Typography>
          <Typography color="#939393" fontSize="14px">
            If you have any cost related queries Please contact us on ${centerDetails?.public_number}. We are available between Mon-Fri: 8AM - 5PM Sat: 8AM -
            12PM
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MedicareQuestion;
