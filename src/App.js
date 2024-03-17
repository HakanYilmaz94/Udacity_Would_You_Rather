import React from 'react';
import Login from './components/Login';
import Header from './components/Header';
import { useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logout from './components/Logout';
import NewQuestionCard from './components/NewQuestionCard';
import QuestionsPool from './components/QuestionsPool';
import QuestionCard from './components/QuestionCard';
import Leaderboard from './components/Leaderboard';

function App() {

  const isLogged = useSelector((state) => state.users.isLogged);

  return (
    <BrowserRouter>
      <Header />

      {isLogged ? (

        <Routes>
          <Route path="/" element={<QuestionsPool />} />
          <Route path="/new-question" element={<NewQuestionCard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/question/:id" element={<QuestionCard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      ) : <Login />
      }


    </BrowserRouter >
  );
}

export default App;