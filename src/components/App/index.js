import React from 'react';
import './App.css';

//PLAN:
//-home component
//-limit of three habits (reasonable to work on only three at once)
//-each habit page is its own component (wrapped in the swipe) -> input for habit name; once that's submitted can conditionally render the habit name instead, then a fancy number for days, then an add day button, then a :( reset streak button
//-color changes based on habit streak (~3 days for each change)
//-swipe to change between pages/habits (using swipe package hooked up to React Router + useHistory hook)

function App() {
  return <div className="App"></div>;
}

export default App;
