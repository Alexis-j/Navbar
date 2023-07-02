import { AppBar, Button, Drawer, IconButton, Toolbar, } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIconRounded from '@mui/icons-material/MenuRounded';

export default function Navbar() {
    const [open, setOpen] = useState (false)

    return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIconRounded
              sx={{
              color:"#ffffff",
              width: "2rem",
              height: "2rem"}}

              variant="contained"
              onClick={() => setOpen(true)}

            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <Button
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Open Drawer
      </Button> */}

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer />
      </Drawer>
    </>
  );
}
