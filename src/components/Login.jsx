import React, { useEffect, useState } from 'react';
import { Container, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loading } from '../reducers/global';
import { changeLogged, handleAllUsers } from '../reducers/users';
import { getUsers, getQuestions } from '../utils/_DATA';
import Spinner from './Spinner';
import { handleQuestions } from '../reducers/questions';
import {useNavigate} from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState('');
  const [users, setUsers] = useState(null);

  const isLoading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    fetchInitialData();
  }, []);


  const fetchInitialData = async () => {
    dispatch(loading(true));
    return getUsers()
      .then(users => {
        dispatch(handleAllUsers(users));
        const userList = Object.keys(users).map((user) =>
        ({
          id: users[user].id,
          username: users[user].username,
          name: users[user].name
        })
        );
        setUsers(userList);
        return getQuestions();
      })
      .then(questions => {
        dispatch(handleQuestions(questions));
        dispatch(loading(false));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        dispatch(loading(false));
      });
  };

  const handleLogin = () => {
    navigate('/');
    dispatch(changeLogged({ isLogged: true, user: selectedUser }));
  };


  return (
    <>
      {isLoading ? <Spinner /> : (
        <Container id='login' maxWidth="sm">
          <div>
            <h1>Welcome to the Would You Rather</h1><br></br>
            <FormControl fullWidth margin="normal">
              <InputLabel id="user-type-label">Select User to Login</InputLabel>
              <Select
                labelId="user-type-label"
                id="user-type"
                value={selectedUser}
                onChange={(event) => setSelectedUser(event.target.value)}
              >

                {users?.map((user) => (
                  <MenuItem key={user.id} value={user.username}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleLogin} disabled={!selectedUser}>
              Login
            </Button>
          </div>
        </Container>
      )
      }
    </>
  );
};

export default Login;
