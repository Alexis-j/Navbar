import { List, ListItem, ListItemIcon, ListItemText, Divider, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from '@mui/icons-material/Drafts';


export default function NavListDrawer() {
  return (
    <Box sx={{width: 200, bgcolor: "lightblue"}}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox"/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Draft"/>
          </ListItem>
        </List>
        </nav>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
            component="a"
            href="#trash"
            >
              <ListItemText>Trash</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
            component="a"
            href="#Spam">
              <ListItemText>Spam</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  );
}
