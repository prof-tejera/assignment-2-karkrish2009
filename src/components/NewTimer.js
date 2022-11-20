import { useContext, useEffect, useState, useRef } from 'react';
import TimerProvider, {TimerContext} from './TimerProvider';
import Button from './Button';

const NewTimer = () => {
  const { createTimer } = useContext(TimerContext);
  const  [xTime, setXTime] = useState('');
  const  [yTime, setYTime] = useState('');
  const  [countdown, setCountdown] = useState('');

  return(
    <div>
      <h3>Directions for Creating a New Clock</h3>
      <span>Directions for Creating a New Clock</span>
      <ul>
        <li>xTime (Phase 1) - set a value greater than or equal to 0</li>
        <li> if countdown is false then StopWatch</li>
        <li>if countdown is true</li>
        <li> .....  yTime is greater than 0 then XY Clock</li>
        <li> .....  yTime is equal 0 then Countdown Clock</li>
      </ul>
      <input placeholder="xPhase time (enter gte 0)" value={xTime} onChange={e => setXTime(parseInt(e.target.value))} />
      <input placeholder="yPhase time (enter gte 0)" value={yTime} onChange={e => setYTime(parseInt(e.target.value))} />
      <input placeholder="countdown (true or false)" value={countdown} onChange={e => setCountdown(e.target.value === "t")} />
      <button
        onClick = {() => {
          createTimer({xTime, yTime, countdown});
          setXTime('');
          setYTime('');
          setCountdown('');
        }}
      >
      Submit
      </button>
    </div>
  )
}

export default NewTimer;
