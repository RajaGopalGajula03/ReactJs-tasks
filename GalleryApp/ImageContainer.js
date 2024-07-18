import "./Image.css";
import {useState} from "react";


const ImageContainer =(props)=>{
    const{ ImageList } = props;

    const[currentImage,setCurrentImage] = useState(ImageList[0]);

    const handleThumbnailclick=(image)=>{
        setCurrentImage(image);
    }

    return(
        <div className="gallery">
            <div className="container w-100 col-10">
                <img
                    src={currentImage.imageUrl} alt={currentImage.imageAltText}
                />
                <h2 className="heading2">Nature Phototgraphy</h2>
            </div>
            
            <div className="thumbnail-image ">
               <div>
                    <p className="p1">Nature Photography by Rahul</p>
               </div>
                <div className="thumbnail d-flex row">
                 {ImageList.map((image)=>(
                    <img key={image.id}
                        src={image.thumbnailUrl}
                        alt={image.thumbnailAltText}
                        onClick={()=>handleThumbnailclick(image)}
                        className={currentImage.id === image.id ? 'active-image':'normal-image'}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default ImageContainer;