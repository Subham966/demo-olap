import { CustomButton } from '@/elements/CustomButton'
import { styled } from '@mui/material'
import { AvatarContainer, AvatarMessage, AvatarMessageText, ChatBotContainer } from './Home.style'

const HoverButtonMobile = styled(CustomButton)`
  ::after {
    background-color: red;
  }
`

const ChatBotContainerMobile = styled(ChatBotContainer)`
  bottom:20px;
  right:0px;
  left:0px;

  @media (max-width: 768px) {

  }

  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height:600px ;
  }


  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height:650px ;
  }

 @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height:720px ;  
  }


@media (min-width: 300px) and (max-width: 310px) {
width:305px ;
}
@media (min-width: 310px) and (max-width: 320px) {
width:315px ;
}
@media (min-width: 320px) and (max-width: 330px) {
width:325px ;
}
@media (min-width: 330px) and (max-width: 340px) {
width:335px ;
}
@media (min-width: 340px) and (max-width: 350px) {
width:345px ;
}
@media (min-width: 350px) and (max-width: 360px) {
width:355px ;
}
@media (min-width: 360px) and (max-width: 370px) {
width:365px ;
}
@media (min-width: 370px) and (max-width: 380px) {
width:375px ;
}
@media (min-width: 380px) and (max-width: 390px) {
width:385px ;  
}
@media (min-width: 390px) and (max-width: 400px) {
width:395px ;  
}
@media (min-width: 400px) and (max-width: 410px) {
width:405px ;
}
@media (min-width: 410px) and (max-width: 420px) {
width:415px ;
}
@media (min-width: 420px) and (max-width: 430px) {
width:425px ;  
}
@media (min-width: 430px) and (max-width: 440px) {
width:435px ;
}
@media (min-width: 440px) and (max-width: 450px) {
width:445px ;
}
@media (min-width: 450px) and (max-width: 460px) {
width:455px ;
}
@media (min-width: 460px) and (max-width: 480px) {
width:470px ;
}
@media (min-width: 480px) and (max-width: 780px) {
width:480px ;   
} 

`

const AvatarContainerMobile = styled(AvatarContainer)`
  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
    bottom: 30px;
    right: 30px;
  }
`

const AvatarMessageMobile = styled(AvatarMessage)`
  width: 100px;
  @media (max-width: 768px) {
    height: 52px;
    bottom: 100px;
    right: 55px;
  }
`

const AvatarMessageTextMobile = styled(AvatarMessageText)`
  font-family: Inter Variable;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export {
  HoverButtonMobile,
  ChatBotContainerMobile,
  AvatarContainerMobile,
  AvatarMessageMobile,
  AvatarMessageTextMobile
}
