import React from 'react'
const Images = (props: any) => {
    return (
        <>
            <img src={props?.image} className="img-fluid" />
        </>

    )
}

export default Images;