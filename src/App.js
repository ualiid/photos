import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import data from './data';
//another way
//import data from './datta.js';
function App() {
 const [loading,setLoading]=useState(false);
 const [photo,setPhoto]=useState([]);
 function isScrolling(){
  if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight){
    return;
  }else{
    console.log('scrolling down');
  }
 }
  useEffect(()=>{
    setLoading(true);
    setPhoto(data);
  
  },[loading])
 
    
     useEffect(()=>{
      setLoading(true);
      window.addEventListener('scroll',isScrolling);
      return()=> window.removeEventListener('scroll',isScrolling);
      },[])
   
  
    
    return(
      <main>
        <section className='photos'>
          <div className='photos-center'>
            {photo.map((image,index)=>{
              return <Photo key={index} {...image} />
            })}
          </div>
          {loading && <h2 className='loading'>Loading ...</h2>}
        </section>
      </main>
    )


 
}

export default App
