"use client"; // Mark as client component

import React, {useEffect, useRef, useState} from "react";
import {List, Paper, Typography,} from "@mui/material";


const OnSiteWorkers = () => {
    const socketRef = useRef<WebSocket | null>(null);
    const [onSiteWorkers, setOnSiteWorkers] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/onSiteWorkers?authorization=supervisor');
        socketRef.current = socket;

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            console.log('Message from server:', event.data);
            setOnSiteWorkers(JSON.parse(event.data).onSiteWorkers);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket closed');
        };

        return () => {
            socket.close();
        };
    }, []);


    return (
        <div>
            <Typography color={"#1a1a1a"}>On Site Workers</Typography>
            <Paper elevation={5} style={{padding: '1rem', margin: '1rem', borderRadius: '20px',}}>
                <List>
                    {onSiteWorkers.length > 0 ? (
                        onSiteWorkers.map((worker, idx) => (
                            <Typography>{JSON.stringify(worker)}</Typography>
                        ))
                    ) : (
                        <Typography>No events found.</Typography>
                    )}
                </List>
            </Paper>
        </div>
    );
};

export default OnSiteWorkers;
