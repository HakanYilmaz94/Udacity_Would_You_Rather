import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const UserSummary = ({ avatar, name, totalAnswer, totalQuestions, score }) => {

    console.log(name);
    return (
        <Box
            display="flex"
            justifyContent="center"
            width="100%"
            padding="5px"
        >
            <Box
                display="flex"
                width="40%"
                alignItems="center"
                border="1px solid #ccc"
                padding="10px"
            >
                {/* Left Div with Avatar */}
                <Box
                    width="20%"
                    borderRight="1px solid #ccc"
                    paddingRight="10px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar sx={{ width: 60, height: 60, marginRight: 1 }}>A</Avatar>
                </Box>
                {/* Center Div with Title and Subtitles */}
                <Box
                    width="55%"
                    borderRight="1px solid #ccc"
                    paddingRight="10px"
                    paddingLeft="10px"
                    display="flex"
                    flexDirection="column"
                >
                    <Typography variant="h6" component="h2" align="left">
                        {name}
                    </Typography>
                    {/* Second Row */}
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" gutterBottom align="left">
                            Answered Questions
                        </Typography>
                        <Typography variant="body1" align="right">
                            {totalAnswer}
                        </Typography>
                    </Box>
                    {/* Third Row */}
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1" gutterBottom align="left">
                            Created Questions
                        </Typography>
                        <Typography variant="body1" align="right">
                            {totalQuestions}
                        </Typography>
                    </Box>
                </Box>

                {/* Right Div with Score */}
                <Box width="25%" paddingLeft="10px">
                    <Typography variant="body1">
                        Score: {score}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default UserSummary;
