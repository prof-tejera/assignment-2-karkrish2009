import React, {useState} from 'react';
export const TimerContext = React.createContext({});

const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([]);
  const [selectedTimerId, setSelectedTimerId] = useState(null);
  

  return (
    <TimerContext.Provider
      value={{
        selectedTimerId,
        setSelectedTimerId,
        timers,
        createTimer: ({ xTime, yTime, countdown }) => {
          const id = timers.length + 1;
          setTimers([...timers, { id, xTime, yTime, countdown }]);
          setSelectedTimerId(id);
        },
        retrieveTimer: ({ timerId }) => timers.find(timer => `${timer.id}` === `${timerId}`),
      }}
  >
      {children}
    </TimerContext.Provider>
  );

};

export default TimerProvider;
