import React from 'react';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout, AuthLayout } from './layouts';
import { Home } from './pages';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>

          </Route>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
