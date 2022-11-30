import React from "react";
import './App.css'
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionHistory } from "./components/TransactionHistory";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
    return (
        <GlobalProvider>
            <div className="expense-tracker-container">
                <div className="container">
                    <div className="d-flex flex-column my-5">
                        <Header/>
                        <Balance/>
                        <IncomeExpense/>
                        <TransactionHistory/>
                        <AddTransaction/>
                    </div>
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;