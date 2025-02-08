import { useTimersContext } from "./store/timers-context"
import Timer from "./Timer";

const Timers = () => {
  const {timers} = useTimersContext();
  return (
    <ul>
      {

        timers.map(timer => {
          return(
            <li key={timer.name}>
              <Timer {...timer}></Timer>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Timers