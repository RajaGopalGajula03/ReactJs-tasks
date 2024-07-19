import React, { useState } from "react";
import "./money.css";
import { v4 as uuidv4 } from 'uuid';

const MoneyManager = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("income");
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const handleAddTransaction = () => {
        if (title && amount) {
            const newTransaction = {
                id: uuidv4(),
                title,
                amount: parseFloat(amount),
                type,
            };

            setTransactions([...transactions, newTransaction]);
            updateBalances(newTransaction, "add");

            setTitle("");
            setAmount("");
        }
    };

    const handleDeleteTransaction = (id) => {
        const transactionToDelete = transactions.find(t => t.id === id);
        setTransactions(transactions.filter(t => t.id !== id));
        updateBalances(transactionToDelete, "delete");
    };

    const updateBalances = (transaction, action) => {
        const amount = transaction.amount;
        if (transaction.type === "income") {
            setIncome(income + (action === "add" ? amount : -amount));
            setBalance(balance + (action === "add" ? amount : -amount));
        } else if (transaction.type === "expenses") {
            setExpenses(expenses + (action === "add" ? amount : -amount));
            setBalance(balance - (action === "add" ? amount : -amount));
        }
    };

    return (
        <div className="app-container">
            <div className="app-header">
                <h2 className="heading1">Hi, Richard</h2>
                <p className="p1">Welcome back to your <span className="span1">Money Manager</span></p>
            </div>
            <div className="money-details">
                <div className="balance-div">
                    <div className="balance-image">
                        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balanceImage" className="balance-image" />
                    </div>
                    <div className="balance-details">
                        <p className="p2">Your Balance</p>
                        <p className="remaining-balance">Rs {balance}</p>
                    </div>
                </div>
                <div className="income-div">
                    <div className="income-image">
                        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="incomeImage" className="income-image" />
                    </div>
                    <div className="income-details">
                        <p className="p2">Your Income</p>
                        <p className="income-balance">Rs {income}</p>
                    </div>
                </div>
                <div className="expenses-div">
                    <div className="expenses-image">
                        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expensesImage" className="expenses-image" />
                    </div>
                    <div className="expenses-details">
                        <p className="p2" style={{color:"black"}}>Your Expenses</p>
                        <p className="expenses-balance">Rs {expenses}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <div className="left-side">
                    <h2 className="heading2">Add Transaction</h2>
                    <label htmlFor="title">TITLE</label>
                    <input
                        type="text"
                        id="title"
                        className="titleInput"
                        placeholder="TITLE"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="amount">AMOUNT</label>
                    <input
                        type="number"
                        id="amount"
                        className="amountInput"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <label htmlFor="type">TYPE</label>
                    <select
                        id="type"
                        className="selectAmountType"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="income">Income</option>
                        <option value="expenses">Expenses</option>
                    </select>
                    <button
                        className="addAmount btn btn-primary"
                        onClick={handleAddTransaction}
                    >
                        Add
                    </button>
                </div>
                <div className="right-side">
                    <h1>History</h1>
                    <div className="table-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.title}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.type}</td>
                                    <td>
                                        <img
                                            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                                            alt="delete"
                                            className="delete-icon"
                                            onClick={() => handleDeleteTransaction(transaction.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoneyManager;
