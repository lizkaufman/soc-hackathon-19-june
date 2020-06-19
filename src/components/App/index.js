import React, { useReducer, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Habit from '../Habit';

import './App.css';

import { SET_HABIT_NAME, INCREMENT_STREAK, LOSE_STREAK } from './actionTypes';

//PLAN:
//-home component
//-limit of three habits (reasonable to work on only three at once)
//-each habit page is its own component (wrapped in the swipe) -> input for habit name; once that's submitted can conditionally render the habit name instead, then a fancy number for days, then an add day button, then a :( reset streak button
//-color changes based on habit streak (~3 days for each change)
//-swipe to change between pages/habits (using swipe package hooked up to React Router + useHistory hook)
//-MVP -> use localStorage to store streaks(?)

//Habits managed in array of objects (name and current streak number) at this level, then passed down to habit component via map

const initialHabitState = [
  {
    habitName: '',
    streak: 0,
  },
  {
    habitName: '',
    streak: 0,
  },
  { habitName: '', streak: 0 },
];

function habitReducer(habitState, action) {
  const { type, payload } = action;
  //payload as an object, with properties index and value (index from the map function and the value from the input field)
  //{index: 0, value: `Don't eat chocolate.`}
  switch (type) {
    case SET_HABIT_NAME:
      console.log(`SET_HABIT_NAME`, { payload });
    //return {...habitState, }
    case INCREMENT_STREAK:
      console.log(`INCREMENT_STREAK`, { payload });
      return [...habitState, habitState[payload.index].streak++];
    case LOSE_STREAK:
      console.log(`LOSE_STREAK`, { payload });
      return [...habitState, (habitState[payload.index].streak = 0)];
    default:
      return habitState;
  }
}

//Reducer plan:
//-need a way to identify where in the state the habit is (1, 2, or 3) -> potentially use the index from the map function
//-spread out the whole state (...) except the object in the index from the map function
//-once we're into the specific object, we need one action type to change the habitName string, one action type to increment streak up by one, and one to wipe the streak back to 0

function App() {
  //useReducer to track habit name and streak
  const [habitState, habitDispatch] = useReducer(
    habitReducer,
    initialHabitState
  );
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {
            //try mapping through habits to generate routes and paths and then the actual habit components
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
