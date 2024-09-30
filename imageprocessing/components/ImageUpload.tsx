'use client';
import React, { useState, useRef } from 'react';
import Player from 'lottie-react';
import animationData from '../app/lottie/upload.json';

const ImageUpload = () => {
    const [bgColor, setBgColor] = useState('rgb(246, 239, 229)');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadMessage, setUploadMessage] = useState('Upload Your CSV file');
        

        const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
           const file = e.target.files?.[0];
            if(file){
                console.log('selected file', file.name)
                setBgColor('blanchedalmond');
                setUploadMessage('CSV file successfully uploaded');
            }
        }
    const handleClick = () =>{
        if (fileInputRef.current) {  
            fileInputRef.current.click();
          }
    }

    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection:'column', paddingTop:'72px', }}>
             <label onClick={handleClick} style={{ cursor: 'pointer' }} >
            
          <Player
            autoplay
            loop
            animationData={animationData} 
            style={{ height: '300px', width: '300px', paddingTop:'72px' }} 
          />
          <div className='text-black p-[72px]  text-[38px] font-[700] rounded-[58px] top-[112px] absolute z-[-1]' style={{backgroundColor: bgColor }}>
          {uploadMessage}
            </div>
          </label>
          <input
        type="file"
        accept=".csv"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}  
      />
        </div>
  )
}

export default ImageUpload