import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

function ProgressBar({ name, value, isVoted }) {

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">{name}  {isVoted && <span style={{ color: 'red' }}>Your Vote</span>}</Typography>
                <Typography variant="body2">{value}% voted</Typography>

            </Box>
            <LinearProgress variant="determinate" value={value} sx={{ height: 20 }} />

        </>
    );
}

export default ProgressBar;
