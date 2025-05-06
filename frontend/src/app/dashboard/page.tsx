import {Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar,} from "@mui/material";
import OnSiteWorkers from "@/app/dashboard/on_site_workers";

const drawerWidth = 240;

export default function Dashboard() {
    return (
        <Box sx={{display: 'flex'}}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar/>
                <List>
                    {['Live Worker Dashboard', 'Historical Check-in/out'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
            >
                <OnSiteWorkers></OnSiteWorkers>
            </Box>
        </Box>
    );
}
