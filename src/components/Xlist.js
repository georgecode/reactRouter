import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

const List = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}


// class List extends Component {
//   render() {
//     return (
// 	    <div className="nav">
// 	      <ul>
// 	        <li>list item</li>
// 	        <li>list item</li>
// 	      </ul>
// 	      <Link to="/"><button>Back Home</button></Link>
// 	    </div>
//     );
//   }
// }


export default List;









