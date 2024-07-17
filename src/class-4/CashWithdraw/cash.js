import { useState } from "react";
import "./cash.css";

const CashWithdrawal = ({ denominationsList }) => {
    const [balance, setBalance] = useState(2000);
    const [ErrorMessage,setErrorMessage]= useState("");
    const handleWithdrawal = (value) => {
        if(balance <=0)
        {
            setErrorMessage("Balance is Zero can not withdraw amount");
        }
        else if(balance < value)
        {
            setErrorMessage(`Balance is less than ${value} amount canot withdaw money`);
        }
        else
        {
            setBalance(balance - value)
            setErrorMessage("")
        }
    };

    return (
        <div className="main-div">
            <div className="content-div">
                <div className="heading-div">
                    <p className="name">S</p>
                    <p className="heading1">Sarah Williams</p>
                </div>
                <div className="balance-div">
                    <div className="balance-info">
                        <p className="p1">Your Balance</p>
                       <div>
                        <p className="amount">{balance}</p>
                        <p>in Rupees</p>
                       </div>
                    </div>
                </div>
                <p className="error-message">{ErrorMessage}</p>
                <h1 className="mb-3">Withdraw</h1>
                <p className="p3">CHOOSE SUM (IN RUPEES)</p>
                <div className="denomination-div">
                    {denominationsList.map((denomination) => (
                        <button
                            key={denomination.id}
                            className="denominationButton"
                            onClick={() => handleWithdrawal(denomination.value)}
                        >
                            ₹{denomination.value}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CashWithdrawal;
