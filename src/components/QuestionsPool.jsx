import React, { useEffect, useState } from 'react';
import { Container, ButtonGroup, Button, Box } from '@mui/material';
import QuestionPreview from './QuestionPreview';
import { useSelector } from 'react-redux';

const QuestionsPool = () => {
    const [selectedTab, setSelectedTab] = useState('unanswered');

    const [answeredKeys, setAnsweredKeys] = useState(null);
    const [unAnsweredKeys, setUnAnsweredKeys] = useState(null);

    const allUsers = useSelector((state) => state.users.allUsers);
    const loggedUser = useSelector((state) => state.users.loggedUser);
    const questions = useSelector((state) => state.questions.questionList);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        prepareQuestions();
    }, []);

    const prepareQuestions = () => {
        const answeredKeys = Object.keys(allUsers[loggedUser].answers);
        setAnsweredKeys(answeredKeys);
        const unansweredKeys = Object.keys(questions).filter(qid => !answeredKeys.includes(qid));
        setUnAnsweredKeys(unansweredKeys);
        console.log(unAnsweredKeys, answeredKeys);
    }

    const questionList = () => {
        const keys = selectedTab === 'unanswered' ? unAnsweredKeys : answeredKeys;
        return keys ? Object.values(questions).filter(question => keys.includes(question.id)) : [];
    };


    return (
        <Container className="centered-container" sx={{ border: '1px solid #ccc', borderRadius: '10px', textAlign: 'center', padding: '20px', width: '50%' }}>
            <div id="questions-container">
                <Box sx={{ mb: 2 }}>
                    <ButtonGroup>
                        <Button
                            id="unanswered"
                            variant={selectedTab === 'unanswered' ? 'contained' : 'outlined'}
                            onClick={() => handleTabClick('unanswered')}
                        >
                            Unanswered Questions
                        </Button>
                        <Button
                            id="answered"
                            variant={selectedTab === 'answered' ? 'contained' : 'outlined'}
                            onClick={() => handleTabClick('answered')}
                        >
                            Answered Questions
                        </Button>
                    </ButtonGroup>
                </Box>
                <div id="questions" style={{ padding: '5px', backgroundColor: '#fff' }}>
                    {questionList()?.length > 0 ?
                        (questionList()?.map((question) => (
                            <QuestionPreview key={question.id} question={question} author={allUsers[question.author]}></QuestionPreview>))
                        ) : <span>There is no {selectedTab} questions</span>
                    }

                </div>
            </div>
        </Container>
    );
}

export default QuestionsPool;
