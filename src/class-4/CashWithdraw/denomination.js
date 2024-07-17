import CashWithdrawal from "./cash";
import "./cash.css";
const denominationsList = [
    {id:1,value:50},
    {id:2,value:100},
    {id:3,value:200},
    {id:3,value:500}
]


const Denomination = () =>{

    return(
        <div>
            <CashWithdrawal denominationsList={denominationsList}/>
        </div>
    )
}

export default Denomination;