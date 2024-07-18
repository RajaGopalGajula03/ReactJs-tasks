import Capital from "./Capital";
import "./Capital.css";

const CapitalList = () =>{

    const CapitalList=[
        {
            id:1,
            capitalDisplayTest:"New Delhi",
            country:"India"
        },
        {
            id:2,
            capitalDisplayTest:"Moscow",
            country:"Russia"
        },
        {
            id:3,
            capitalDisplayTest:"London",
            country:"United Kingdom"
        },
        {
            id:4,
            capitalDisplayTest:"Cape Town",
            country:"South Africa"
        },
        {
            id:5,
            capitalDisplayTest:"Cairo",
            country:"Egypt"
        },
        {
            id:6,
            capitalDisplayTest:"Canberra",
            country:"Australia"
        }
    ]

    return(
        <div>
            <Capital capitalList={CapitalList}/>
        </div>
    )
}

export default CapitalList;