import { useEffect, useRef, useState } from 'react'
import Container from './UI/Container'
import { useTimersContext, type Timer as TimerProps } from './store/timers-context'

const Timer = ({name, duration}: TimerProps) => {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const {isRunning} = useTimersContext();

  if(remainingTime <= 0 && interval.current){
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if(isRunning){
     timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 50)
      }, 50);
  
      interval.current = timer;
    }else if(interval.current){
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning])

  const formattedRemainingTime = (remainingTime / 1000) * 1000;

  return (
    <Container as="article">
        <h2>{name}</h2>
        <p><progress max={duration * 1000} value={remainingTime} /></p>
        <p>{formattedRemainingTime}</p>
    </Container>
  )
}

export default Timer