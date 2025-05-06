"use client"; // Mark as client component

import React, {useEffect, useRef, useState} from "react";
import {Paper, Typography,} from "@mui/material";


const OnSiteWorkers = () => {
    const socketRef = useRef<WebSocket | null>(null);
    const [data, setData] = useState("");

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/onSiteWorkers?authorization=supervisor');
        socketRef.current = socket;

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            console.log('Message from server:', event.data);
            setData(event.data);
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
            <Paper elevation={5} style={{padding: '1rem', margin: '1rem', borderRadius: '20px',}}>
                <Typography sx={{marginBottom: 2}}>
                    ${data}
                </Typography>
            </Paper>
        </div>
    );
};

export default OnSiteWorkers;
