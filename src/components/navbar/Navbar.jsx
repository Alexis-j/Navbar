import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography, } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIconRounded from '@mui/icons-material/MenuRounded';
import {InboxIcon } from "@mui/icons-material/Inbox";


      const navLinks = [
        {
          title: "Home", path: "/home", icon: <InboxIcon />,
        },
        {
          title: "Login", path: "#login", icon: <InboxIcon />,
        },
        {
          title: "Register", path: "#register", icon: <InboxIcon />,
        },
      ]

export default function Navbar() {
    const [open, setOpen] = useState (false)

    return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
              color="inherit"
              size="larger"
              variant="contained"
              onClick={() => setOpen(true)}
              sx={{ display: {xs: "flex", sm: "none"} }}

          >
            <MenuIconRounded/>
          </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1}}
            >
              News
            </Typography>
            <Box sx={{ display: {xs: "none" , sm:"block"} }}>
              {navLinks.map(item => (
                <Button
                color="inherit"
                key={item.title}
                component ="a"
                href={item.path}
              >
                {item.title}
                </Button>
              ))}
            </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: {xs: "flex", sm: "none"} }}
      >
        <NavListDrawer navLinks={navLinks}/>
      </Drawer>
    </>
  );
}
