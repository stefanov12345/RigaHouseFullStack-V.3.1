import React, { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { createUser } from "../../../../../server/controllers/userCntrl";
import UserDetailContext from "../../context/UserDetailContext";
import useFavourites from "../../hooks/useFavourites";

const Layout = () => {
useFavourites()

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    console.log(`[0]*** *** *** setUserDetails: ${setUserDetails}`);
    const getTokenAndRegsiter = async () => {
      console.log(`[0.1]*** *** *** setUserDetails: ${setUserDetails}`);
      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "http://localhost:8000",
          scope: "openid profile email",
        },
      });
      console.log(`[1.0]*** *** *** res: ${res}`);
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      console.log(`[1.1]*** *** *** setUserDetails: ${setUserDetails}`);
      mutate(res)
    };

    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
