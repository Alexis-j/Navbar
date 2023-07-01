import { Box } from "@mui/system";
import { List, ListItem, ListItemText } from "@mui/material";
export default function NavListDrawer() {
  return (
    <Box sx={{width: 200, bgcolor: "lightblue"}}>
      <List>
        <ListItem>
          <ListItemText>
        esto es el drawer
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  )
}
