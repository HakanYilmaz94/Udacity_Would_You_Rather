
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tabs, Tab, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedTab } from '../reducers/global';


const Header = () => {

  const dispatch = useDispatch();

  const selectedTab = useSelector((state) => state.global.selectedTab);
  const loggedUser = useSelector((state) => state.users.loggedUser);
  const allUsers = useSelector((state) => state.users.allUsers);

  const handleChange = (event, newValue) => {
    dispatch(changeSelectedTab(newValue));
  };

  return (
    <AppBar position="sticky">
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="10px">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="header tabs"
          textColor="secondary"
          TabIndicatorProps={{ style: { backgroundColor: "#D97D54" } }}
        >
          <Tab label="Home" component={Link} to="/" />
          <Tab label="New Question" component={Link} to="/new-question" />
          <Tab label="LeaderBoard" component={Link} to="/leaderboard" />
          <Tab label="Logout" component={Link} to="/logout" />
        </Tabs>
        {/* Text for the header */}
        {loggedUser && <Box>
          <Typography variant="h6" component="h1">
           Welcome {allUsers[loggedUser].name}
          </Typography>
        </Box>
        }


      </Box>
    </AppBar>
  );
};

export default Header;
