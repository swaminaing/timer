import { useTimersContext } from "./store/timers-context";
import Button from "./UI/Button";

const Header = () => {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>React Timer</h1>

      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer
        }
      >
        {timersCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
};

export default Header;
