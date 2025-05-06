"use client"; // Mark as client component

import React, {useState} from "react";
import {Alert, Button, Paper, Snackbar, TextField} from "@mui/material";
import axios from "axios";
import {useRouter} from "next/navigation";


const CheckInForm = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [siteId, setSiteId] = useState("");
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:8000/checkIn", {name, siteId});

            if (res.status === 201 && res.data?.user?.id) {
                const userId = res.data.user.id;
                localStorage.setItem('userId', userId);
                setFeedback({type: "success", message: "Check-in successful!"});
                router.push('/dashboard');
            } else {
                setFeedback({type: "error", message: "Check-in failed"});
            }
        } catch (err: any) {
            console.error(err);
            setFeedback({type: "error", message: err.response?.data?.message || "Check-in failed"});
        }
    };

    return (
        <div>
            <Paper elevation={5} style={{padding: '1rem', margin: '1rem', borderRadius: '20px',}}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    onChange={e => setName(e.target.value)}
                    style={{marginBottom: "1rem"}}
                />
                <TextField
                    label="Site ID"
                    variant="outlined"
                    fullWidth
                    onChange={e => setSiteId(e.target.value)}
                    style={{marginBottom: "1rem"}}
                />
                <Button
                    variant="contained"
                    fullWidth
                    style={{padding: "1rem", borderRadius: 10}}
                    onClick={handleSubmit}
                >
                    Check-In
                </Button>
            </Paper>
            <Snackbar
                open={!!feedback}
                autoHideDuration={3000}
                onClose={() => setFeedback(null)}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                {feedback ? (
                    <Alert
                        onClose={() => setFeedback(null)}
                        severity={feedback.type}
                        sx={{width: "100%"}}
                    >
                        {feedback.message}
                    </Alert>
                ) : <div/>}
            </Snackbar>
        </div>
    );
};

export default CheckInForm;
