
import './App.css';
import Camera from './components/Camera';
import Wallet from './components/Wallet';
import {Routes,Route} from 'react-router-dom';
import Settings from './components/Settings';
import AddOperator from './components/AddOperator';
import UpdateOperator from './components/UpdateOperator';
import CreateOperator from './components/CreateOperator';


function App() {
  return (
    <Routes>
          
           <Route path="/" exact element={<Wallet />} />
      <Route path="/Camera"  element={<Camera />} />
      <Route path="/AddOperator"  element={<AddOperator />} />
      <Route path="/Settings"  element={<Settings />} />
      <Route path="/UpdateOperator"  element={<UpdateOperator />} />
      <Route path="/CreateOperator"  element={<CreateOperator />} />
        
        </Routes>

  );
}

export default App;
