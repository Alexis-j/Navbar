import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";

export default function NavListDrawer({ navLinks }) {
  return (
    <Box sx={{ width: 200, bgcolor: "#ffffff" }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component="a"
                href={item.path}
                >
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
