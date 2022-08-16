import { Provider } from 'react-redux';

import { store } from './redux/store';

import './App.css';

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Our Checklist</h1>
      </div>
    </Provider>
  );
};
