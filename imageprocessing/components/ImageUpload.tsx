'use client';
import React, { useRef } from 'react';
import Player from 'lottie-react';
import animationData from '../app/lottie/upload.json';

const ImageUpload = () => {
        const fileInputRef = useRef<HTMLInputElement>(null);

        const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
           const file = e.target.files?.[0];
            if(file){
                console.log('selected file', file.name)
            }
        }
    const handleClick = () =>{
        if (fileInputRef.current) {  
            fileInputRef.current.click();
          }
    }

    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection:'column', paddingTop:'72px' }}>
             <label onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div>
                Upload Your CSV file
            </div>
          <Player
            autoplay
            loop
            animationData={animationData} 
            style={{ height: '300px', width: '300px', paddingTop:'72px' }} 
          />
          </label>
          <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}  // Hide the file input
      />
        </div>
  )
}

export default ImageUpload