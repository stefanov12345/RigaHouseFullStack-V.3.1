import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <section className='h-wrapper' style={{ background: headerColor }}>
      <div className='flexCenter innerWidth paddings h-container'>
        {/* logo */}
        <NavLink to='/'>
          <img src='./logo.png' alt='logo' width={100} />
        </NavLink>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}
          >
            {/* <a href='#residencies'>Residencies</a>
            <a href='#value'>Our Value</a>
            <a href='#contact-us'>Contact Us</a>
            <a href='#get-started'>Get Started</a>
            <button className='button'> */}

            <NavLink to='/properties'>Properties</NavLink>
            <a href='mailto:stefano_vannucci@hotmail.com'>Contact</a>
            {/* login burron */}
            {!isAuthenticated ? (
              <button className='button' onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <>
                <ProfileMenu user={user} logout={logout} /> 
              </>
            )}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className='menu-icon'
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
