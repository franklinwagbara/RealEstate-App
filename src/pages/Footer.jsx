import React from "react";
import {
  Box,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Filter1Rounded,
  Filter2Rounded,
  Filter3Rounded,
  Filter4Rounded,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "40px",
        backgroundColor: "#222",
        height: "400px",
        marginTop: "60px",
      }}
    >
      <Grid container>
        <Grid sx={12} sm={6} md={6} item>
          <Box color="#ffffffc7">
            <List>
              <ListItem>
                <ListItemIcon>
                  <Filter1Rounded color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"orem ipsum dolor sit amet"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Filter2Rounded color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"orem ipsum dolor sit amet"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Filter3Rounded color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"orem ipsum dolor sit amet"} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Filter4Rounded color="secondary" />
                </ListItemIcon>
                <ListItemText primary={"orem ipsum dolor sit amet"} />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid sx={12} sm={6} md={6} item>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quod facere possimus nesciunt vero voluptatem, aspernatur quidem
            odit vel aperiam natus enim explicabo a ut sequi quaerat labore!
            Beatae, nulla?
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
