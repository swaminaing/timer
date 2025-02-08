import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import TimerContextProvider from './components/store/timers-context.tsx';
import Timers from './components/Timers.tsx';

function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContextProvider>
  );
}

export default App;
