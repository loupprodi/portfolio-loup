import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home";
import { Project } from "../../pages/Project";

import { AnimatePresence } from "framer-motion";
import { Page404 } from "../../pages/Page404";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
