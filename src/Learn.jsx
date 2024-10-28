import React, { useEffect, useState } from 'react'
import axios from "axios"
import './learn.css'

const Learn = () => {
    
    const[data,setdata]=useState([]);
    const [cq,setcq]=useState(null)

    useEffect(()=>{
        findarticle();
    },[]);
    const findarticle=async()=>{
        const articles=await axios
        .get("https://quoteaut.vercel.app/api.json")
        .then((response)=>{
            setdata(response.data);
            if (response.data.length>0){
                setcq(response.data[0]);
            }
        });

    };
    const findquote=async()=>{
        const randomindex=Math.floor(Math.random()*data.length)
        setcq(data[randomindex])
    }
    const tweetnow=()=>{
        const tweettext=`${
            cq.text
        }-${cq.author}`
        const tweet= `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweettext)}`;
        window.open(tweet,'_blank');
    }
  return (
    <div className='box'>
        <div className='bu'>
            {
                cq && (
                    <div className='quote'>
                        <h1>{
                            cq.text
                        }</h1>
                        <p>{
                            cq.author
                            }</p>
                        </div>
                )
            }
            <div style={{
                  gap:"20px",
                  display:"flex",


            }}>
            <button onClick={findquote} className='new'>New Quotes</button>
            <button onClick={tweetnow} className='new'>Tweet Now</button>
        
            </div>
            
        </div>
        
        
      
      {/* {data.map((item,index)=>{
        return(
            <div key={index}>
                <h1>{item.text}</h1>
                <h4>{item.author}</h4>
            </div>


        )
      })} */}

     
    </div>
  )
  
}

export default Learn
