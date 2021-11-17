import logo from './logo.svg'
import './App.css'

import { useAppSelector, useAppDispatch } from '@/store/hook';
import { decrement, increment, incrementByAmount } from './features/count/counterSlice';

function App() {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>count is: {count}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>+</button>
          <button type="button" onClick={() => dispatch(decrement())}>-</button>
          <button type="button" onClick={() => dispatch(incrementByAmount(3))}>+3</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
