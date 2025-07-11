// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> 
          </Routes>
        </Router>
      </Provider>
  );
};

export default App;
