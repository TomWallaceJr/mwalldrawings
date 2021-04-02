import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}
