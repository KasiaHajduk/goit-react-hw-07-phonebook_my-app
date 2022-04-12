import React, {useEffect} from 'react';
import './App.css';
import PhonebookList from './components/PhoneBook/PhonebookList/PhonebookList';
import PhonebookEditor from './components/PhoneBook/PhonebookEditor/PhonebookEditor';
import PhonebookFilter from './components/PhoneBook/PhonebookFilter/PhonebookFilter';

import { useDispatch } from "react-redux";
import { fetchContacts } from "./services/api";

function App () {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchContacts()); }, []);

  return (
      <div>
          <h1>Phonebook</h1>
          <PhonebookEditor /> 
          <h2>Contacts</h2>
          <PhonebookFilter />
          <PhonebookList />
          
      </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }
//export default App;
