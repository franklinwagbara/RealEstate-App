import React from "react";
import {
  Box,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import {
  BusinessRounded,
  EmailRounded,
  Filter1Rounded,
  Filter2Rounded,
  Filter3Rounded,
  Filter4Rounded,
  PermPhoneMsgRounded,
} from "@material-ui/icons";
import {
  FacebookRounded,
  Instagram,
  InstallMobileRounded,
  LinkedCameraRounded,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
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
          <Grid xs={12} sm={6} md={6} item>
            <Box color="#ffffffc7" width={400}>
              <List
                subheader={
                  <ListSubheader>
                    <Typography variant="h4" color="primary">
                      Services
                    </Typography>
                  </ListSubheader>
                }
              >
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
          <Grid xs={12} sm={6} md={6} item>
            <Box color="#ffffffc7" width={400}>
              <List
                subheader={
                  <ListSubheader
                    sx={{
                      color: "primary",
                    }}
                  >
                    <Typography variant="h4" color="primary">
                      Contact Information
                    </Typography>
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemIcon>
                    <BusinessRounded color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={"orem ipsum dolor sit amet"} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailRounded color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={"orem ipsum dolor sit amet"} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PermPhoneMsgRounded color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={"orem ipsum dolor sit amet"} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FacebookRounded fontSize="20px" color="primary" />
                    <LinkedIn color="secondary" />
                    <Instagram color="primary" />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <span
        style={{
          backgroundColor: "#111",
          display: "block",
          width: "100%",
          height: "40px",
          textAlign: "center",
          padding: "10px",
          fontStyle: "italic",
          color: "#5555",
        }}
      >
        Developer@KlinTech - Franklin G. Wagbara
      </span>
    </>
  );
};

export default Footer;
