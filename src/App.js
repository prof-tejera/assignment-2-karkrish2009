import './App.css';
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import TimerList from './Components/TimerList';
import Wrapped from './Components/TimerList';

const App = () => {
  let xtime = 2;
  let ytime = 4;
  let rounds = 1;
  let countdown = true;
  const numbers = [1, 2, 3, 4, 5];
  //const xytimerList = numbers.map((number) =>
  //  <XYTimer xtime={xtime} ytime={ytime} countdown={countdown} rounds = {rounds} key={number.toString()} value={number}/>
  return (
    <Wrapped />
  );
}

//export default App;

/*


const StopWatch = ({time}) => {

  const [watchTime, setWatchTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);



  //const minute = Math.floor((remainingTime)/(60*1000));
  //console.log(minute);
  //const second = Math.floor((remainingTime%(60*1000))/1000);
  //setSecond(time);
  //console.log(second);
  //const microsecond = Math.floor((remainingTime%(1000))/10);

  useEffect(() => {
    let interval = null;
    let run = watchTime;
    if (timerOn) {
      interval = setInterval(() => {

        console.log("in DisplayClock", time);
        if (run < (time*1000) ){
          run = run  + 10;
          setWatchTime(watchTime => watchTime+10);
        }
        else {

          console.log("Gone over");
          return clearInterval(interval);

        }


      }, 10);

    }
    else {
      return clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [timerOn])

  return (
    <div>
      <div>
        <DisplayClock time={watchTime}/>
      </div>
      <div>
        <Button onClick={() => setTimerOn(true)}>Start</Button>
        <Button onClick={() => setTimerOn(false)}>Stop</Button>
        <Button onClick={() => setTimerOn(true)}>Resume</Button>
        <Button onClick={() => {setWatchTime(0); setTimerOn(false);}}>Reset</Button>
      </div>
    </div>

  );

}


const CountdownTimer = ({time}) => {

  const [remainingTime, setRemainingTime] = useState(time*1000);
  const [timerOn, setTimerOn] = useState(false);



  //const minute = Math.floor((remainingTime)/(60*1000));
  //console.log(minute);
  //const second = Math.floor((remainingTime%(60*1000))/1000);
  //setSecond(time);
  //console.log(second);
  //const microsecond = Math.floor((remainingTime%(1000))/10);

  useEffect(() => {
    let interval = null;
    let run = remainingTime;
    if (timerOn) {
      interval = setInterval(() => {

        console.log("in DisplayClock", remainingTime);
        if (run > 0 ){
          run = run  - 10;
          setRemainingTime(remainingTime => remainingTime-10);
        }
        else {

          console.log("Gone negative");
          return clearInterval(interval);

        }


      }, 10);

    }
    else {
      return clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [timerOn])

  return (
    <div>
      <div>
        <DisplayClock time={remainingTime}/>
      </div>
      <div>
        <Button onClick={() => setTimerOn(true)}>Start</Button>
        <Button onClick={() => setTimerOn(false)}>Stop</Button>
        <Button onClick={() => setTimerOn(true)}>Resume</Button>
        <Button onClick={() => {setRemainingTime(time*1000); setTimerOn(false);}}>Reset</Button>
      </div>
    </div>

  );

}

*/
export default App;
