//import { useContext, useEffect, useState, useRef } from 'react';
//import { TimerContext } from './TimerProvider';



const Button = ({onClick, children}) => {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
