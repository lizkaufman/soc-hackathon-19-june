import React, { useState } from 'react';

import css from './habit.module.css';

function Habit({
  habitName,
  habitStreak,
  index,
  addDay,
  resetStreak,
  saveHabitName,
}) {
  const [inputName, setInputName] = useState('');

  function handleChange(event) {
    console.log(event.target.value);
    setInputName(event.target.value);
    console.log({ inputName });
  }

  return (
    <div>
      {habitName === '' ? (
        <div className={css.habitNameInput}>
          <input
            placeholder="Name your habit here"
            onChange={handleChange}
            value={inputName}
          />
          <button onClick={() => saveHabitName(index, inputName)}>
            I commit!
          </button>
        </div>
      ) : (
        <h1>{habitName}</h1>
      )}
      <h1>{habitStreak}</h1>
      <button onClick={() => addDay(index)}>➕</button>
      <button onClick={() => resetStreak(index)}>🔴</button>
    </div>
  );
}

export default Habit;
