import { styled } from '@mui/material'
import { AvatarContainer, AvatarMessage, AvatarMessageText, ChatBotContainer } from './Home.style'

const ChatBotContainerDesktop = styled(ChatBotContainer)`
  width: ${props =>
    props.smallWidth? '664px'
      : '1000px'};
      
  height:  ${(props) => (props.emb ?`${770}px`: "770px")} ;
  // max-height: 820px;
  bottom: ${props => (!props.emb ? '130px' : 'undefined')};
  right: ${props => (!props.emb ? '40px' : 'undefined')};
  
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 520px;
    bottom: ${props => (!props.emb ? '70px' : 'undefined')};
    right: ${props => (!props.emb ? '20px' : 'undefined')};
    width: ${props =>
      props.smallWidth
        ? '414px'
        : '650px'};
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 600px;
    bottom: ${props => (!props.emb ? '80px' : 'undefined')};
    right: ${props => (!props.emb ? '30px' : 'undefined')};
    width: ${props =>
      props.smallWidth
        ? '514px'
        : '800px'};
        
  }
  
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 700px;
    bottom: ${props => (!props.emb ? '85px' : 'undefined')};
    right: ${props => (!props.emb ? '30px' : 'undefined')};
    width: ${props =>
      props.smallWidth
        ? '614px'
        : '900px'};
  }

`

const AvatarContainerDesktop = styled(AvatarContainer)`
  width: 72px;
  height: 72px;
  bottom: 40px;
  right: 40px;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    width: 47px;
    height: 47px;
    bottom: 15px;
    right: 15px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    width: 52px;
    height: 52px;
    bottom: 15px;
    right: 15px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    width: 57px;
    height: 57px;
    bottom: 15px;
    right: 15px;
  }
`

const AvatarMessageDesktop = styled(AvatarMessage)`
  width: 140px;
  height: 60px;
  bottom: 120px;
  right: 80px;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 50px;
    bottom: 60px;
    right: 48px;
    width: 100px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 55px;
    bottom: 70px;
    right: 48px;
    width: 110px;
  }


  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 55px;
    bottom: 80px;
    right: 48px;
    width: 140px;
  }

`

const AvatarMessageTextDesktop = styled(AvatarMessageText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 15px;
  }
`

export {
  ChatBotContainerDesktop,
  AvatarContainerDesktop,
  AvatarMessageDesktop,
  AvatarMessageTextDesktop
}
