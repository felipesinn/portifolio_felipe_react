import Footer from "./components/common/Footer";
import GlobalStyles from "./globalstyles/styles";
import { Router } from "./routes/AppRoutes";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <Footer />
    </>
  );
}
