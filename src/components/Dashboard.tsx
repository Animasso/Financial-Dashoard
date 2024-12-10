import Header from "./Header";
import { useState, useEffect } from "react";
import { Transaction } from "./types/types";
import { getCategoryClass, setAmountColor } from "../utils/styleUtils"

import { remainingBudget, filterTransactions } from "../utils/transactionUtils";

import ModalForm from "./ModalForm";
import Charts from "./Charts";
import ChartBar from "./ChartBar";

const Dashboard = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState<string>("all")

    // Budget fixe défini par l'utilisateur
    const [fixedBudget, setFixedBudget] = useState<number>(0);

    // Calculs dynamiques
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    // Transactions filtrées
    const filteredTransactions = filterTransactions(transactions, filter);
    // Solde restant
    const budgetRemaining = remainingBudget(fixedBudget, income, expense);


    // Ajouter une transaction
    const addTransaction = (newTransaction: Transaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    useEffect(() => {
        const totalIncome = transactions
            .filter((t) => t.type === "income")
            .reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = transactions
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + t.amount, 0);

        setIncome(totalIncome);
        setExpense(totalExpense);

    }, [transactions]);





    return (
        <div className=" w-full h-full">
            <Header />
            <div className="flex flex-col mt-12 justify-center text-center ">
                <h1 className="text-white text-3xl font-doto">My Wallet</h1>
            </div>

            {/* Champ pour définir le budget fixe */}
            <div className="flex flex-col justify-around mt-7">

                <div className="flex flex-col w-1/3 text-center self-center mt-7">
                    <input
                        className="rounded-lg text-center w-1/3 self-center py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:ring-blue-500 focus:border-blue-500"
                        type="number"
                        value={fixedBudget || ""}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d+$/.test(value)) {
                                setFixedBudget(Number(value));
                            }
                        }}
                        placeholder="budget"
                    />
                    <label className=" mt-5 mb-6 font-doto text-2xl text-white">
                        Define your budget (€,$)
                    </label>

                </div>
            </div>

            {/* Affichage des budgets */}
            <div className=" bg-slate-400 w-1/2 justify-self-center  text-black p-5 border text-center rounded  shadow-lg mt-5">
                <h2 className="text-lg font-bold text-center">Sum up</h2>
                <p className=" font-bold">Income : {income} €</p>
                <p className=" font-bold">Expense : {expense} €</p>

                <p className=" font-bold">
                    FixedBudget : {fixedBudget} € -{" "}
                    {budgetRemaining < 0 ? (
                        <span className="text-red-500 font-bold text-xl">Over the budget !</span>
                    ) : (
                        <span className="text-green-500 font-bold text-xl">In the  budget</span>
                    )}
                </p>
                <p className=" font-bold">Remaining Budget : {budgetRemaining} €</p>
            </div>

            {/* Bouton pour ajouter une transaction */}
            <button
                className="bg-white rounded mt-10 ml-5 p-4 shadow-lg font-doto hover:bg-slate-300 text-base text-black"
                onClick={() => setIsModalOpen(true)}
            >
                Add a transaction
            </button>

            {/* Formulaire Modal */}
            <ModalForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                addTransaction={addTransaction}
            />



            {/* Graphique */}
            {transactions.length > 0 && (
                <div className=" flex flex-col  lg:justify-around items-center gap-8 mt-10">
                    <div className="w-full lg:w-1/2 overflow-x-auto">
                        {/* Bouton pour filtrer */}
                        <div className="flex justify-center gap-4 mb-5">
                            <button
                                className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                                onClick={() => setFilter("all")}
                            >
                                All
                            </button>
                            <button
                                className={`px-4 py-2 rounded ${filter === "income" ? "bg-orange-400 text-white" : "bg-gray-300"}`}
                                onClick={() => setFilter("income")}
                            >
                                Income
                            </button>
                            <button
                                className={`px-4 py-2 rounded ${filter === "expense" ? "bg-orange-800 text-white" : "bg-gray-300"}`}
                                onClick={() => setFilter("expense")}
                            >
                                Expense
                            </button>
                        </div>
                        {/* Affichage des transactions filtrées */}
                        <table className=" table-auto w-full text-left text-white">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Amount (€,$)</th>
                                    <th className="px-4 py-2">Category</th>
                                    <th className="px-4 py-2">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTransactions.map((transaction, index) => (
                                    <tr key={index} className="bg-gray-800 border-b">
                                        <td className={`px-4 py-2 text-black ${setAmountColor(transaction.amount)}`}>{transaction.amount}</td>
                                        <td className={`px-4 py-2 ${getCategoryClass(transaction.category)}`}>{transaction.category}</td>
                                        <td className={`px-4 py-2 ${transaction.type === "income" ? "bg-orange-400" : "bg-orange-800"}`}>
                                            {transaction.type === "income" ? "Income" : "Expense"}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full lg:w-1/2 justify-center">
                        <Charts income={income} expense={expense} />
                        <ChartBar income={income} expense={expense} fixedBudget={fixedBudget} budgetRemaining={budgetRemaining} />
                    </div>
                    {/* Affichage des transactions */}

                </div>
            )}
        </div>
    );
};

export default Dashboard;
