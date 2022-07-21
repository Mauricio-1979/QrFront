import './App.css';
import {useState} from 'react';
import {Route,Routes,BrowserRouter,Navigate} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Table from './components/Table';
import { useSelector } from 'react-redux';
function App() {
  //let table=useSelector(state=>state.Table)
  //let id=`/${table*1}`
 // console.log(table)
  //console.log(id)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const connect = (boolean) => {
    setIsAuthenticated(boolean);
  }
  return (
    <div className="App">
      
      <BrowserRouter>
     
       <Routes>
          <Route exact path='/' element={! isAuthenticated ? <Table connect={connect} /> : <Navigate connect={connect} replace to='/home'/>} />
          <Route exact path='/home'element={<Home/>}/>
          <Route exact path='/detail'element={<Detail/>}/>
       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
