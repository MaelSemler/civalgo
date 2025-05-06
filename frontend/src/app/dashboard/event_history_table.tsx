"use client";

import React, {useEffect, useState} from "react";
import {List, Paper, Typography,} from "@mui/material";
import axios from "axios";


const EventHistoryTable = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEventsHistory = () => {
            axios.get('http://localhost:8000/checkInOutEvents', {
                headers: {
                    Authorization: 'Bearer TOKEN',
                },
            })
                .then(function (response) {
                    console.log(response)
                    if (response.status === 200) {
                        console.log(response.data.checkInOutHistory);
                        setEvents(response.data.checkInOutHistory);
                    } else {
                        console.error('Failed to fetch events:');
                    }
                })
                .catch(function (error) {
                    console.error('Failed to fetch events:', error);
                });
        };

        fetchEventsHistory();
    }, []);


    return (
        <div>
            <Typography color={"#1a1a1a"}>Event History Table</Typography>
            <Paper elevation={5} style={{padding: '1rem', margin: '1rem', borderRadius: '20px',}}>
                <List>
                    {events.length > 0 ? (
                        events.map((event, idx) => (
                            <Typography>{JSON.stringify(event)}</Typography>
                        ))
                    ) : (
                        <Typography>No events found.</Typography>
                    )}
                </List>
            </Paper>
        </div>
    );
};

export default EventHistoryTable;
