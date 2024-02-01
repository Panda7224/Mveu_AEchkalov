import React from 'react';
import './UserBox.css';

function UserBox({setModalBox, setPage}) {

  function User () {
    const newToken = localStorage.getItem('token')
    console.log(newToken)
    if (newToken === null) {
      return (
        <div className="UserBox">
          <button onClick={() => setModalBox('Login')}>Вход</button>
          <button onClick={() => setModalBox('Registration')}>Регистрация</button>
        </div>
      )
    } else {
      return (
        <div className="UserBox">
          <button onClick={() => setPage('Account')}>Личный кабинет</button>
          <button onClick={() => setModalBox('Logout')}>Выход</button>
        </div>
      )
    }
  } 

  return (
    <User/>    
  );
}

export default UserBox;