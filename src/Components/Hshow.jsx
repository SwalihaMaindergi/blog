import React from 'react';
// import { Link } from 'react-router-dom';
// import HData from './TData';




function Hshow(props){
    return<>
        <div className='block' style={{margin:"0px 0px 0px 20px"}}>

        <img src={props.img} alt="error" height={"200px"} width={"300px"} />

        <h1 className='heading' style={{marginBottom:"0px"}} >{props.name1}</h1>
        <p>{props.detail}</p>
        <p className=''><span className='title'>Day of Visit </span>{props.contact}</p>
        
        
        </div>
   
       
    
      
      
  
 
  
   
      
   
       
       
        </>
}

export default Hshow;