import "./Image.css";
import ImageContainer from "./ImageContainer";

const ImageList = () =>{

    const imageList = [
        {
            id:1,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s",
            imageAltText:"image-1",
            thumbnailAltText:"image-1"
        },
        {
            id:2,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNCNvxV8Csq_RbQmfcv-I7bvaptBkvM2AIA&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNCNvxV8Csq_RbQmfcv-I7bvaptBkvM2AIA&s",
            imageAltText:"image-2",
            thumbnailAltText:"image-2"
        },
        {
            id:3,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",
            imageAltText:"image-3",
            thumbnailAltText:"image-3"
        },
        {
            id:4,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHmh9WoqPc3t2zQubuOMR_Ng2lv308pctPw&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHmh9WoqPc3t2zQubuOMR_Ng2lv308pctPw&s",
            imageAltText:"image-4",
            thumbnailAltText:"image-4"
        },
        {
            id:5,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID1v4_D5EakMuYbLlsXEKVmRPHMDWYXm9bQ&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID1v4_D5EakMuYbLlsXEKVmRPHMDWYXm9bQ&s",
            imageAltText:"image-5",
            thumbnailAltText:"image-5"
        },
        {
            id:6,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35HYtO9g1X0jQdyepdra2CWR53XuQVFcZDw&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35HYtO9g1X0jQdyepdra2CWR53XuQVFcZDw&s",
            imageAltText:"image-6",
            thumbnailAltText:"image-6"
        },
        {
            id:7,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdM4Naw6g6mBZtWbsk8r4u0DEauhmvKrpFg&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdM4Naw6g6mBZtWbsk8r4u0DEauhmvKrpFg&s",
            imageAltText:"image-7",
            thumbnailAltText:"image-7"
        },
        {
            id:8,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qpPt4s1JvOGauQNxN8mp1b8-L0bV0_b1oA&s",
            thumbnailUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qpPt4s1JvOGauQNxN8mp1b8-L0bV0_b1oA&s",
            imageAltText:"image-8",
            thumbnailAltText:"image-8"
        }
    ]

    return(
        <div>
            <ImageContainer ImageList={imageList}/>
        </div>
    )
}
export default ImageList;