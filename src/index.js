// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// //import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// //registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Title, List } from './App';

import Title from './components/Xtitle';
import List from './components/Xlist';

// import './index.css';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Title} />
        <Route path="/list" component={List} />
      </div>
  </Router>,
  document.getElementById('root')
)