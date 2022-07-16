import { Provider } from 'react-redux';
import './App.css';
import Main from './Components/Main/Main';

import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
