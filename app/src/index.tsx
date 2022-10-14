/* eslint-disable import/no-unresolved */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Rotas from './routes/Rotas'
import Home from './home/Home'
import Routes from './routes/Rotes'

function render() {
  ReactDOM.render(
    <div>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    </div>, document.getElementById('root')!);
}

render();