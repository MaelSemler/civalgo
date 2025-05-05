"use client"; // Mark as client component

import React from "react";
import {Button, Paper, TextField} from "@mui/material";
import { useRouter } from "next/navigation";


const CheckInForm = () => {
    const router = useRouter();

    return (
        <Paper elevation={5} style={{padding: '1rem', margin: '1rem', borderRadius: '20px',}}>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                style={{marginBottom: "1rem"}}
            />
            <TextField
                label="Site ID"
                variant="outlined"
                fullWidth
                style={{marginBottom: "1rem"}}
            />
            <Button
                variant="contained"
                fullWidth
                style={{padding: "1rem", borderRadius: 10}}
                onClick={() => {
                    router.push('/dashboard');
                }}
            >
                Check-In
            </Button>
        </Paper>
    );
};

export default CheckInForm;
