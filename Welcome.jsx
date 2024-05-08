import React, { useEffect, useState } from 'react';
import "./Welcome.css";
import { useNavigate } from 'react-router-dom';


const Welcome = () => {

    const Navigate =useNavigate()
    function handleclick(e){
        Navigate("/login");
    }
    
    const numbers = Array.from({ length: 70 }, () => Math.floor(Math.random() * 600));

    return (
        <section className='maindiv'>
            {numbers.map((number, index) => (
        <span key={index} style={{ '--1': number }}></span>
      ))}
            <div onClick={handleclick} className='Welocme'>welcome</div>
            <p>hello</p>
        </section>
    );
};

export default Welcome;
