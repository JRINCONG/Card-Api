import React, {useState} from 'react'
import { CardApp } from './CardApp.jsx';


export const ApiCard = () => {

    const  [Datos , SetDatos ] = useState('');



    const Buscar = async () =>{
       
        const ApiCulsul= await fetch('https://jsonplaceholder.typicode.com/todos/1/posts');
        const Data = await ApiCulsul.json();
         const Respuesta = Data.filter( (x) =>{
                 if(x.userId != 0){
                    return{
                        body:x.body,
                        id:x.id,
                        title:x.title,
                    }
                 }
         })
          
          SetDatos(Respuesta)
      


    }

  let array=[...Datos]

 console.log('este',array)
  return (
    <>
    <div className='Contenedor'>
    <div className='Caja-inicio'>
    <h1 className='titulo-inicio'>Cargar Api...</h1>
    <button onClick={Buscar}>Cargar..Api</button>
    </div>
    <div className='Contenedor-Cajas'>
    {
        array.map( x => (       
       
        <CardApp
          key={x.id}              
          id={x.id}
          body={x.body}
          title={x.title} 
          userId={x.userId}            
        />
    ))
       
    }
     </div> 
     </div> 
    </>
  )
}


