import {Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar,} from "@mui/material";
import OnSiteWorkers from "@/app/dashboard/on_site_workers";
import EventHistoryTable from "@/app/dashboard/event_history_table";
import React from "react";
import CheckOutButton from "@/app/dashboard/check_out_button";

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
                <CheckOutButton></CheckOutButton>
            </Drawer>
            <Box
                component="main"
                sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
            >
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                    sx={{height: "100vh"}}
                    spacing={3}
                >
                    <EventHistoryTable></EventHistoryTable>
                    <OnSiteWorkers></OnSiteWorkers>
                </Grid>
            </Box>
        </Box>
    );
}
