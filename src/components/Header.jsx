import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import React, { useState } from "react";
import Logo from "../assets/images/test.png";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const navList = [
  { title: "HOME", path: "/" },
  { title: "PROPERTIES", path: "/properties" },
  { title: "ABOUT US", path: "/about" },
  { title: "SERVICES", path: "/services" },
];

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState();

  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar color="primary">
        <Toolbar>
          <IconButton color="inherit">
            <img src={Logo} width={60} />
          </IconButton>
          <Typography
            color="inherit"
            sx={{
              flexGrow: 1,
            }}
            variant="h5"
          >
            MEKSONS REALTY
          </Typography>
          <Stack direction="row" spacing={2}>
            {navList.map((item) => (
              <Button
                key={item.title}
                onClick={() => {
                  navigate(item.path);
                  setActive(item.title);
                }}
                sx={{
                  backgroundColor: `${
                    item.title === active ? "secondary.main" : "inherit"
                  }`,
                  color: "white",
                  "&:hover": { backgroundColor: "secondary.main" },
                }}
                variant="text"
                color="inherit"
              >
                {item.title}
              </Button>
            ))}

            <Link to="/#contact" smooth>
              <Button
                sx={{
                  "&:hover": {
                    color: "white",
                    backgroundColor: "secondary.main",
                  },
                }}
                variant="outlined"
                color="secondary"
              >
                CONTACT US
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
