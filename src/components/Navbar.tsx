import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Experience", "Contact"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <a
              href={`#${item.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "#0F182A" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/*<Typography*/}
          {/*  variant="h6"*/}
          {/*  component="div"*/}
          {/*  sx={{*/}
          {/*    flexGrow: 1,*/}
          {/*    display: { xs: "none", sm: "block" },*/}
          {/*    fontWeight: "bold",*/}
          {/*  }}*/}
          {/*  color={"primary"}*/}
          {/*>*/}
          {/*  ADM*/}
          {/*</Typography>*/}
          <Grid
            container
            justifyContent={"flex-end"}
            spacing={3}
            alignItems={"center"}
          >
            {navItems.map((item) => (
              <Grid
                item
                key={item}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    color={"primary"}
                    variant={"body2"}
                    style={{
                      fontWeight: "bold",
                      fontFamily:
                        "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",
                    }}
                  >
                    {item}
                  </Typography>
                </a>
              </Grid>
            ))}
            <Grid item>
              <Button color={"primary"} variant={"outlined"}>
                Resume
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Stack spacing={2} style={{ position: "fixed", right: 50, top: "45%" }}>
        <Fab
          style={{ color: "#5BE3D0", backgroundColor: "#112240" }}
          aria-label="github"
          href={"https://github.com/amacwhirter"}
          target={"_blank"}
        >
          <GitHubIcon />
        </Fab>
        <Fab
          style={{ color: "#5BE3D0", backgroundColor: "#112240" }}
          aria-label="linkedin"
          href={"https://www.linkedin.com/in/amacwhirter/"}
          target={"_blank"}
        >
          <LinkedInIcon />
        </Fab>
        <Fab
          style={{ color: "#5BE3D0", backgroundColor: "#112240" }}
          aria-label="twitter"
          href={"https://twitter.com/ashmac10"}
          target={"_blank"}
        >
          <TwitterIcon />
        </Fab>
      </Stack>
    </Box>
  );
}
