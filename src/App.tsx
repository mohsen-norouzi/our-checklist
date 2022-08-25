import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { store } from './redux/store';
import { AuthProvider } from 'lib/auth/AuthProvider';
import './App.css';

// pages
import { HomePage, TeamPage, LoginPage } from 'pages';

// components
import { Layout } from 'components';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/teams' element={<TeamPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Provider>
  );
};

export default App;
