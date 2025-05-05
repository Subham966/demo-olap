import { Avatar, Box, Typography, styled } from '@mui/material'
import DesktopTransparentBg from '@/assets/images/DesktopTransparentBg.png'
import DesktopTransparentBg2 from '@/assets/images/DesktopTransparentBg2.png'

const Container = styled(Box)`
display: ${props => props.emb && "grid"}  ;
justify-content: ${props => props.emb && "center"} ;
padding: ${props => props.emb && "40px"} ;
`

const ChatBotContainer = styled(Box)`
  position: ${props => (props.emb ? 'relative' : 'fixed')};
  overflow: hidden;
  justify-content: center;
  border-radius: 20px 20px 10px 10px;
  box-shadow: 7px 14px 27px rgba(66, 66, 66, 0.47);
  border-radius: 20px 20px 10px 10px;
  background-size: Cover;
  background-position: center bottom;
  background-positiony: 60%;
  background-color: ${props => props.primaryBackgroundColor};
  background-image: ${props =>
    props.smallWidth? `url(${DesktopTransparentBg})`
      : `url(${DesktopTransparentBg2})`};

`

const AvatarContainer = styled(Avatar)`
  position: fixed;
  background-size: cover; 
  background-color: white;
  cursor: pointer;
  z-index: 999;
  border:${props => `1px solid ${props.theme.palette.primary.activeButton}`} ; 
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
  }

`

const AvatarMessage = styled(Box)`
  padding: 5px;
  text-align: center;
  position: fixed;
  background-size: cover;
  background-color: white;
  border: 1px solid #939393;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 999;
  &:after {
    content: '';
    position: fixed;
    bottom: -10px;
    left: 72%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: white transparent transparent transparent;
  }
`

const AvatarMessageText = styled(Typography)`
  font-family: Inter Variable;
  font-size: 16px;
`

export {
  ChatBotContainer,
  AvatarContainer,
  AvatarMessage,
  AvatarMessageText,
  Container
}
