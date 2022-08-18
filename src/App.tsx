import { Provider } from 'react-redux';

import { store } from './redux/store';

import './App.css';

import { HomePage } from 'pages';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from 'api/api-slice';
import { Layout } from 'components';
// pages

const App = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <Layout>
          <h1>Our Checklist</h1>
          <hr />
          <HomePage />
        </Layout>
      </ApiProvider>
    </Provider>
  );
};

export default App;
