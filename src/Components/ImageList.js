import React from 'react'
import './ImageList.css'
import Imagecard from './ImageCard'

const ImageList = (props) =>{

    // console.log(props.images)

    const images = props.images.map((image) => {
        return <Imagecard key={image.id} image={image} />
    })

    // in below code image used 3 times to shorter that we can use above syntax
    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
    // })
    
    return(
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList