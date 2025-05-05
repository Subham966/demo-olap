import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { appStore } from "./redux";
import MultiThemeProvider from "./theme/provider/MultiThemeProvider";

function App({ webbot_uid }) {
  let referral_code= new URLSearchParams(window.location.search).get("referral_code");
  return (
    <>
        <Provider store={appStore}>
          <MultiThemeProvider>
            <Home webbot_uid={webbot_uid} referral_code={referral_code} />
          </MultiThemeProvider>
        </Provider>
    </>
  );
}

export default App;
