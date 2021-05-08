import React from 'react'
import { API } from "../../backend"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(()=>({
    img: {
        height: '150px', maxWidth: '50%' ,display: 'block', marginLeft:'auto', marginRight: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '5px'
    }
}))

function ImageHelper({ product }) {
const root = useStyles();
   const imageurl = product ? `${API}/product/photo/${product._id}` : "https://img.icons8.com/carbon-copy/100/000000/image.png"

    return (
        <div>
            <img

                className={root.img}
                src={imageurl}
                alt={"img"}

            // image={`${API}/product/photo/${product._id}`}
            // style={{maxHeight:'100%', maxWidth: '100%'}}
            // title={`${product.prodname}`}
            />
        </div> 
    )
}

export default ImageHelper
