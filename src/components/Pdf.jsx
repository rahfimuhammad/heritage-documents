import React from 'react';
import { IsMediumScreen } from '../libs/detectScreen'

const Pdf = ({pdfUrl}) => {

    const isMedium = IsMediumScreen()

    return (
        <iframe 
            title='pdf' 
            style={{
                width: isMedium? '100%' : '440px', 
                borderRadius: '10px',
                padding: '20px 5px 5px 5px',
                aspectRatio: '1/1.4', 
                backgroundColor: '#303030'
            }} 
            src={pdfUrl}/>
    )
}

export default Pdf
