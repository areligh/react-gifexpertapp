import React from 'react';

export const GifGridItem = ({title, url}) => {    
    return <div className="animate__animated animate__pulse card">
        <img src={url} alt={title} />
        <p className="animate__animated animate__wobble">{title}</p>
    </div>
}