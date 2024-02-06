import React from 'react';
import './Home.css';
import doctor from './doctor-07.jpg';

export default function Home() {
  return (  
    <>
      <div className='container'>
        <div className='columnalign'>
        
          <h2 className='title'>
            Search Doctor,
          <br/>
        Make an Appointment
          </h2>
          
          
          <div className='content1'>

           <label className='loc'>
            Location
           </label>
           
           
          
            <input type='text' className='form-control'  placeholder='eg.chennai,delhi'></input>
            
            
            </div>
          <div className='wrap'>
            <div className='content2'>
              <div>
              <label className='gender'>
                Gender
              </label>
              </div>
            <div>
            
            <input type='text' className='form-control'  placeholder='eg.male,female'></input>
            </div>
            </div>
            <div className='content3'>
              <div>
           <label className='dept'>
            Department
           </label>
           </div>
          <div>
          
            <input type='text' className='form-control' placeholder='eg.heart,lung'></input>
            </div>
          </div>
          </div>
          </div>
          <div className='doc'> 
            <img src={doctor}
             width={470.5}
             height={461.3} />
          </div>
          </div>
        
      
    </>
  );
}