import styles from "./page.module.css";
import CheckInForm from "@/components/check_in_form";
import {Grid, Typography} from "@mui/material"; // Ensure to style properly

export default function Home() {
    return (
        <div className={styles.container}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ height: "100vh" }}
                spacing={3}
            >
                <Typography variant='h2' color="#5B5B5B" align="center">
                    Civalgo
                </Typography>
                <CheckInForm />
            </Grid>
        </div>
    );
}
