import React from 'react';

function Logout () {

  return (
    <>
    <div className='Logout'>
      <h1>Покинуть личный кабинет?</h1>
      <button onClick={() => localStorage.removeItem('token')}> Да</button>
          
    </div>    
  </>
  );
}

export default Logout;