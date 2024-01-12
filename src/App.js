import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainRouter, { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return <MainRouter />;
}

export default App;
