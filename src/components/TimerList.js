import {useContext} from 'react';
import TimerProvider, {TimerContext} from './TimerProvider';
import Timer from './Timer';
import NewTimer from './NewTimer';


const TimerList = () => {
  //const { selectedTimerId, setSelectedTimerId, timers } = useContext(TimerContext);
  const { timers } = useContext(TimerContext);
  console.log(timers.map(timer => console.log(timer)));

  //if (selectedTimerId) return <Timer timerId={selectedTimerId} />

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
    <div>
    {timers.map(timer =>
      <Timer id={timer.id} xtime ={timer.xTime} ytime ={timer.yTime} countdown = {timer.countdown} />
    )}
    </div>

    <div>
    <NewTimer />
    </div>

    </div>


  );
};

const Wrapped = () => {

  return (
    <TimerProvider>
      <TimerList />
    </TimerProvider>
  );
};


export default Wrapped;
