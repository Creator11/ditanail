import './App.less';
import React, { Main } from './Pages/Main/Main'
import Menu from './Components/Menu/Menu'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/> 
      </header>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
