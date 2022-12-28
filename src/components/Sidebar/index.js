import React from "react";
import { IconContext } from "react-icons";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <IconContext.Provider value={{ color: "#021C35" }}>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu
            style={{ margin: "auto", width: "50%", padding: "10px" }}
          >
            <SidebarLink onClick={toggle} to="/">
              Home
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/work">
              Work
            </SidebarLink>
            <SidebarLink onClick={toggle} to="/connect">
              Connect
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </IconContext.Provider>
  );
};

export default Sidebar;
