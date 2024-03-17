
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSummary from './UserSummary';


const Leaderboard = () => {


    const allUsers = useSelector((state) => state.users.allUsers);

    const leaderBoardList = () => {

        const leaderBoardUsers = [];

        for (const user of Object.values(allUsers)) {
            const totalAnswers = Object.values(user.answers).length;
            const totalQuestions = user.questions.length;
            leaderBoardUsers.push({
                name: user.name,
                id: user.id,
                avatar: user.avatar,
                totalAnswers,
                totalQuestions,
                score: totalAnswers + totalQuestions
            });
        }

        return leaderBoardUsers.sort((a, b) => b.score - a.score);;
    }


    return (
        <>
            {leaderBoardList()?.map((leaderBoardUser) => {
                return <div id={leaderBoardUser.id}>
                    <UserSummary
                        key={leaderBoardUser.id}
                        avatar={leaderBoardUser.avatar}
                        name={leaderBoardUser.name}
                        totalAnswer={leaderBoardUser.totalAnswers}
                        totalQuestions={leaderBoardUser.totalQuestions}
                        score={leaderBoardUser.score}
                    />
                </div>
            })}

        </>
    );
};

export default Leaderboard;
