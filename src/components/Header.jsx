import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <div>
      <AppBar color="transparent">
        <Container>
          <Toolbar></Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
