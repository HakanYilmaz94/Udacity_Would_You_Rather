
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
    loggedUser: null,
    allUsers: []
}

export const users = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        changeLogged: (state, action) => {
            state.isLogged = action.payload.isLogged;
            state.loggedUser = action.payload.user;
        },
        handleAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        updateUserByAnswer: (state, action) => {
            const { qid, loggedUser, answer } = action.payload;
            state.allUsers = {
                ...state.allUsers,
                [loggedUser]: {
                    ...state.allUsers[loggedUser],
                    answers: {
                        ...state.allUsers[loggedUser].answers,
                        [qid]: answer
                    }
                }
            };
        },
        updateUserByNewQuestion: (state, action) => {
            const { qid, loggedUser, answer } = action.payload;
            state.allUsers = {
                ...state.allUsers,
                [loggedUser]: {
                    ...state.allUsers[loggedUser],
                    answers: {
                        ...state.allUsers[loggedUser].answers,
                        [qid]: answer
                    }
                }
            };
        },
        logout: () => initialState

    },
})

export const { changeLogged, handleAllUsers, updateUserByAnswer, updateUserByNewQuestion, logout } = users.actions
export default users.reducer

