import logo from './logo.svg'
import './count.css'

import { useAppSelector, useAppDispatch } from '@/store/hook';
import { increment, decrement, incrementByAmount } from './features/count/counterSlice';

function Count() {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();

  return (
    <div className="count">
      <header className="count-header">
        <img src={logo} className="count-logo" alt="logo" />
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
            className="count-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="count-link"
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
};

export default Count;
