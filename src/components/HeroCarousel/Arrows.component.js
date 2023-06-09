import React from "react";

export  const NextArrow = (props) => {
    //const {className , style, onclick } = props;
    return (
        <>
            <div
            className={props.className} 
            style={{ ...props.style,
            backgroundColor: 'black',
            opacity: 0.7, 
            width: '35px',
            height: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            fontSize: '20px',
            color: 'transparent'}}
            onClick={props.onClick} 
           />

            

        </>
    )

};

export  const PrevArrow = (props) => {
    return (
        <>
             <div
            className={props.className} 
            style={{ ...props.style, 
            backgroundColor: 'black',
            opacity: 0.7 ,
            width: '35px',
            height: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            fontSize: '20px',
            color: 'transparent'}}
            onClick={props.onClick} 
            />
        </>
    )
};