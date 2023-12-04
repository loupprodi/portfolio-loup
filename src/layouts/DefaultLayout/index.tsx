import { Outlet } from "react-router-dom";

import { LayoutContainer, OutletContainer } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
      <Outlet />
      </OutletContainer>
      <Footer />
    </LayoutContainer>
  );
};
