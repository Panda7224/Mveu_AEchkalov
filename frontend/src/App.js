import React, {useState}  from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import Basket from './views/Basket';
import Account from './views/Account';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Logout from './components/Logout';

function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const[basket, setBasket] = useState([])

  const pages = {
    Main: <Main basket={basket} setBasket={setBasket} setModalBox={setModalBox} />,
    Basket: <Basket basket={basket} setBasket={setBasket} />,
    Account: <Account setPage={setPage}/>
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>,
    Logout: <ModalBox setModalBox={ setModalBox } ><Logout /></ModalBox>
  }

  return (
    <div className="App">
      <Header setPage={ setPage } setModalBox={setModalBox} />
      { pages[page] }
      { modalBoxes[modalBox] }
      <Footer />      
    </div>
  );
}

export default App;
