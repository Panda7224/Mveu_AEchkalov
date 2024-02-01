import React from 'react';
import './Account.css';
import { jwtDecode } from 'jwt-decode'

function Account() {
  
  function UserFind () {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token !== null) {
       const id = jwtDecode(token).id
       //console.log(id)
      return <p>{id}</p>
    }
  }

  return (
    <div className="Account">
       <h1>Личный кабинет</h1>
       <p>Пользователь</p>
       <UserFind />
      
    </div>
    
  );
}
 
export default Account;