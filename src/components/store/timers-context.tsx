import { createContext, ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimerState & {
  addTimer: (timeData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timeData){
            //...
        },
        startTimer(){

        }, 

        stopTimer(){

        }
    }
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
