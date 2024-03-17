import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { saveQuestion } from '../reducers/questions';
import { useNavigate } from 'react-router-dom';
import { generateUID } from '../utils/_DATA';

function NewQuestionCard() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.users.loggedUser);

  const [option1, setOption1] = React.useState('');
  const [option2, setOption2] = React.useState('');

  const handleOption1Change = (event) => {
    setOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setOption2(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Option 1:', option1);
    console.log('Option 2:', option2);
    const generatedQuestion = prepareQuestion(option1, option2);
    console.log(generatedQuestion);
    dispatch(saveQuestion({ question: generatedQuestion }));
    navigate('/');
  };


  const prepareQuestion = (option1, option2) => {
    return {
      id: generateUID(), timestamp: Date.now(), author: loggedUser, 1: {
        votes: [],
        text: option1,
      },
      2: {
        votes: [],
        text: option2
      }
    };
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <Card variant="outlined" sx={{ width: '500px' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ borderBottom: '2px solid #000', paddingBottom: '8px', marginBottom: '16px' }} gutterBottom>
            Create a new Question
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Would you rather...
          </Typography>
          <TextField
            label="Option 1"
            fullWidth
            value={option1}
            onChange={handleOption1Change}
            margin="normal"
          />
          <Typography variant="h5" component="div" gutterBottom>
            OR
          </Typography>
          <TextField
            label="Option 2"
            fullWidth
            value={option2}
            onChange={handleOption2Change}
            margin="normal"
          />
          <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NewQuestionCard;
