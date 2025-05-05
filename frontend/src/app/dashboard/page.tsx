import {
    AppBar,
    Box,
    Drawer,
    List, ListItem,
    ListItemButton, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";

const drawerWidth = 240;

export default function Dashboard() {
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar
                position="fixed"
                sx={{width: '100%'}}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
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
                <Typography sx={{marginBottom: 2}}>
                </Typography>
                <Typography sx={{marginBottom: 2}}>

                </Typography>
            </Box>
        </Box>
    );
}
