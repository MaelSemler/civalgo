"use client";

import {Button,} from "@mui/material";
import React from "react";
import axios from "axios"
import {useRouter} from "next/navigation";


const CheckOutButton = () => {
    const router = useRouter();

    const handleCheckout = async () => {
        try {
            const userId = localStorage.getItem('userId');

            if (!userId) {
                console.error("No user id");
                return;
            }

            const res = await axios.post("http://localhost:8000/checkOut", {
                user_id: parseInt(userId, 10),
            }, {
                headers: {
                    Authorization: 'Bearer TOKEN',
                },
            });
            if(res.status === 200) {
                router.replace('/');
            } else {
                console.error("Could not checkout");
            }
        } catch (err: any) {
            console.error(err);
        }
    };

    return (
        <Button
            variant="contained"
            fullWidth
            style={{padding: "1rem", borderRadius: 10}}
            onClick={handleCheckout}
        >
            Check-Out
        </Button>
    );
}

export default CheckOutButton;
