import React from 'react';

const Application = ({item}) => {
    
    return (
        <>
           {item.map(item => <li>{item.Application1}</li>)} 
        </>
    );
};

export default Application;