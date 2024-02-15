import React from 'react';
import './Account.css';
import { jwtDecode } from 'jwt-decode'

function Account() {
  
  function UserFind () {
    const token = localStorage.getItem('token')
    
    if (token !== null) {
       const login = jwtDecode(token).login
       const id = jwtDecode(token).id
       console.log(id)
       const data = {
        id: id
       }

       const api = 'http://localhost:9001/user/find'

       fetch(api, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'    
           },
           body: JSON.stringify(data)
       })
       .then(result => result.json())
       .then((result) => {
          const email = result.email
          const password = result.password
          console.log(email, password)
          document.getElementById('mail').innerText = "Ваша электронная почта:  " + email
          document.getElementById('pass').innerText = "Ваш текущий пароль:  " + password
           
       })

       return (
        <>
        <p>Добро пожаловать, {login}</p>
        <p id='mail'></p>
        <p id='pass'></p>
        <p>Сменить пароль</p>
        <input id='password' type='password' placeholder='Введите новый пароль'/>
        <button >Отправить</button>
        </>
       )
    } else {
      return <p>Авторизуйтесь, пожалуйста</p>
    }
  }

  return (
    <div className="Account">
       <h1>Личный кабинет</h1>
       <UserFind />
      
    </div>
    
  );
}
 
export default Account;