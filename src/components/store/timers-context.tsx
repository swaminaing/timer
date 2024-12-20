import { createContext } from "react";

type Timer = {
    name: string;
    duration: number;
}

type TimerState = {
    isRunning: boolean;
    timers: Timer[];
}

type TimersContextValue = TimerState & {
    addTimer: (timeData: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);