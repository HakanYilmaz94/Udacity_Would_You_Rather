import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    questionList: []
}

export const questions = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {
        handleQuestions: (state, action) => {
            state.questionList = action.payload
        },
        saveQuestionAnswer: (state, action) => {
            const { qid, loggedUser, answer } = action.payload;
            state.questionList = {
                ...state.questionList,
                [qid]: {
                    ...state.questionList[qid],
                    [answer]: {
                        ...state.questionList[qid][answer],
                        votes: [...state.questionList[qid][answer].votes, loggedUser]
                    }
                }
            };
        },
        saveQuestion: (state, action) => {
            console.log(action.payload);
            const { question } = action.payload;
            state.questionList = {
                ...state.questionList,
                [question.id]: question

            };
        },
        reset: () => initialState

    },
})

export const { handleQuestions, saveQuestionAnswer, saveQuestion } = questions.actions
export default questions.reducer