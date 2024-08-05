import { useState } from "react";
import HomeIcon from "../../assets/Home.jsx";

import {
  MaxWidthWrapper,
  NavBarContainer,
  StyledBurger,
  Ul,
} from "./styles.js";

const RightNav = ({ open, components }) => {
  return (
    <Ul open={open}>
      {components?.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </Ul>
  );
};

const Burger = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} components={children} />
    </>
  );
};

const Navbar = ({ children }) => {
  return (
    <NavBarContainer>
      <MaxWidthWrapper>
        <HomeIcon />
        <Burger>{children}</Burger>
      </MaxWidthWrapper>
    </NavBarContainer>
  );
};

export default Navbar;
