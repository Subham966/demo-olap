import { screenSizeReducer } from "./screenSize/screenSize";
import { centerDetailsReducer } from "./centerDetails";
import { chatDetailsReducer } from "./chatDetails";
import { conversationTimeoutReducer } from "./conversationTimeout";
import { errorDetailsReducer } from "./errorDetails";
import { multiThemeReducer } from "./multiTheme";
import { networkStatusReducer } from "./NetworkStatus";
import { shakeReducer } from "./shakeReducer/ShakeSlice";

const rootReducer = {
  multiTheme: multiThemeReducer,
  chatDetails: chatDetailsReducer,
  centerDetails: centerDetailsReducer,
  conversationTimeout: conversationTimeoutReducer,
  errorDetails: errorDetailsReducer,
  networkStatus: networkStatusReducer,
  screenSize: screenSizeReducer,
  shakeFunc: shakeReducer,
};

export { rootReducer };
