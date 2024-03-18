import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import {useSelector} from 'react-redux';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Logout from './components/Logout';
import NewQuestionCard from './components/NewQuestionCard';
import QuestionsPool from './components/QuestionsPool';
import QuestionCard from './components/QuestionCard';
import Leaderboard from './components/Leaderboard';
import NotFoundPage from "./components/NotFoundPage";

function App() {

    const isLogged = useSelector((state) => state.users.isLogged);
    return (
        <BrowserRouter>
            <Header/>

            {isLogged ? (

                <Routes>
                    <Route exact path="/" element={<QuestionsPool/>}/>
                    <Route path="/add" element={<NewQuestionCard/>}/>
                    <Route path="/leaderboard" element={<Leaderboard/>}/>
                    <Route path="/questions/:id" element={<QuestionCard/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            ) : <Login/>
            }

        </BrowserRouter>
    );
}

export default App;