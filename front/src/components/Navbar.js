import React from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Navbar.elements";
import { FaAirbnb } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaAirbnb />
            <p>Satur</p>
            <p>(x)</p>
          </LogoContainer>

          <Menu>
            <MenuItem>
              <MenuItemLink>Inicio</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Quien es satur</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Programa de Gobierno</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Fake News</MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
