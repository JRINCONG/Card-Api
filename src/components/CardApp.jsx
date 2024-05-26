import React from 'react';
import '../css/CardApp.css';




export const CardApp = ({id,body, title, userId}) => {

  
   


  return (
    <>
     
    {
    <div className='Caja' id={id}>
     <div className='Caja-title'>
        <p className='title'>{title}</p>
     </div>
     <div className='Caja-userid'>
        <h4 className='userid'>Usuarios tipo ID: {userId}</h4>
     </div>

      <div className='Caja-body'>
        <p className='texto-body'>{body}</p>
      </div>

    
     </div>
    }
 
    </>
  )
}


