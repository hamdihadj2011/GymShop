import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5001/${item}`,
                    thumbnail: `http://localhost:5001/${item}`
                })
            })
            
            setImages(images)
        }
    }, [props.detail])
    console.log(Images)
    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
