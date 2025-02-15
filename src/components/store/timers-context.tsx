import { createContext, ReactNode, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimerState = {
  isRunning: true,
  timers: [],
};

type AddTimerAction = {
    type: "ADD_TIMER";
    payload: Timer;
}

type StopTimerAction = {
    type: "STOP_TIMERS"
}

type StartTimerAction = {
    type: "START_TIMERS"
}

type TimerContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

type Action = AddTimerAction | StartTimerAction | StopTimerAction;

const TimerContext = createContext<TimerContextValue | null>(null);

export function useTimersContext() {
  const timerCtx = useContext(TimerContext);

  if (timerCtx === null) {
    throw new Error("TimerContext is null - that's should not be the case");
  }

  return timerCtx;
}

type TimerContextProviderProps = {
  children: ReactNode;
};

function timersReducer(state: TimerState, action: Action): TimerState{
    if(action.type === "START_TIMERS"){
        return {
            ...state, 
            isRunning: true
        }
    }

    if(action.type === "STOP_TIMERS"){
        return {
            ...state, 
            isRunning: false
        }
    }

    if(action.type ===  "ADD_TIMER"){
        return {
            ...state, 
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state;
}

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timerState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimerContextValue = {
    timers: timerState.timers,
    isRunning: timerState.isRunning,
    addTimer: (timerData) => {
      //...
      dispatch({type: "ADD_TIMER", payload: timerData})
    },
    startTimer: () => {
      // ...
      dispatch({type: "START_TIMERS"})
    },
    stopTimer: () => {
      // ...
      dispatch({type: "STOP_TIMERS"})
    },
  };

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}
