import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, FormControl, RadioGroup, Radio, FormControlLabel, Button, Box } from '@mui/material';
import ProgressBar from './ProgressBar';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { saveQuestionAnswer } from '../reducers/questions';
import { updateUserByAnswer } from '../reducers/users';

const QuestionCard = () => {
    const [question, setQuestion] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [progressOption1, setProgressOption1] = useState(0);
    const [progressOption2, setProgressOption2] = useState(0);

    const [chosenAnswer, setChosenAnswer] = useState(null);

    const { id } = useParams();

    const dispatch = useDispatch();

    const questions = useSelector((state) => state.questions.questionList);
    const allUsers = useSelector((state) => state.users.allUsers);
    const loggedUser = useSelector((state) => state.users.loggedUser);

    const handleOptionChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };

    useEffect(() => {
        fetchQuestion();
    }, [loggedUser]);

    const fetchQuestion = () => {
        setQuestion(questions[id]);
        const userAnswer = allUsers[loggedUser].answers[id];
        setChosenAnswer(userAnswer);
        if (userAnswer) {
            calculateProgressBar(userAnswer, true);
        }
    }

    const handleSubmit = () => {
        setChosenAnswer(selectedOption);
        calculateProgressBar(selectedOption, false);
        const params = { qid: id, answer: selectedOption, loggedUser: loggedUser };
        dispatch(updateUserByAnswer(params));
        dispatch(saveQuestionAnswer(params));
        console.log(selectedOption);
    };

    const calculateProgressBar = (selectedOption, isCalculated) => {
        let optionOneCount = questions[id][1].votes.length;
        let optionTwoCount = questions[id][2].votes.length;

        if (!isCalculated) {
            if (selectedOption === 1) {
                optionOneCount++;
            } else if (selectedOption === 2) {
                optionTwoCount++;
            }
        }

        const totalCount = optionOneCount + optionTwoCount;

        setProgressOption1((optionOneCount / totalCount) * 100);
        setProgressOption2((optionTwoCount / totalCount) * 100);
    }

    return (
        <>
            {question &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <Card variant="outlined" sx={{ width: 600, maxWidth: '90%', textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Asked by {allUsers[loggedUser]?.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Would you rather...?
                            </Typography>

                            {chosenAnswer ?
                                (<>
                                    <ProgressBar name={question[1].text} value={progressOption1} isVoted={chosenAnswer === 1} />
                                    <ProgressBar name={question[2].text} value={progressOption2} isVoted={chosenAnswer === 2} />
                                </>
                                ) :
                                <>
                                    <FormControl component="fieldset" sx={{ mb: 2 }}>
                                        <RadioGroup aria-label="options" name="options" value={selectedOption} onChange={handleOptionChange}>
                                            <FormControlLabel value={1} control={<Radio />} label={question[1].text} />
                                            <FormControlLabel value={2} control={<Radio />} label={question[2].text} />
                                        </RadioGroup>
                                    </FormControl>
                                    <Box sx={{ mb: 2 }}>
                                        <Button variant="contained" onClick={handleSubmit} disabled={selectedOption === ''}>
                                            Vote
                                        </Button>
                                    </Box></>}

                        </CardContent>
                    </Card>
                </Box>
            }
        </>
    );

}

export default QuestionCard;
