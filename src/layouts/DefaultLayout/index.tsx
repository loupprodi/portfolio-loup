import { Outlet } from "react-router-dom";

import { LayoutContainer } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
