import React from 'react';
import { Box, Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuestionPreview = ({ question, author }) => {

    const navigate = useNavigate();

    const forwardToQuestion = () => {
        navigate(`/questions/${question.id}`);
    };

    return (

        <Box id={question.id} sx={{ width: '60%', margin: 'auto', marginBottom: '10px' }}>
            <Card variant="outlined">
                <CardContent>
                    <Box>
                        <Typography variant="h6" sx={{ display: 'flex', marginBottom: 1, alignItems: 'left' }}>{author.name} Asks</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ width: 80, height: 80, marginRight: 1 }}>A</Avatar>
                            <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                                <Typography variant="h6" sx={{ marginBottom: 1 }}>Would you rather</Typography>
                                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>...{question[2].text}</Typography>
                                <Button onClick={forwardToQuestion} variant="contained">View Poll</Button>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default QuestionPreview;
