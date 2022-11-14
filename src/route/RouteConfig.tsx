import { memo, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { Page404 } from "../error/Page404";
import { Home } from "../home/Home";

export const RouteConfig: FC = memo(() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Header />}>
            <Route path={"/home"} element={<Home />} />
          </Route>
          <Route path={"/*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
});
