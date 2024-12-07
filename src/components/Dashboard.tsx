import Header from "./Header";
import { useState, useEffect } from "react";
import { Transaction } from "./types/types";
import ModalForm from "./ModalForm";
import Charts from "./Charts";

const Dashboard = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Budget fixe défini par l'utilisateur
    const [fixedBudget, setFixedBudget] = useState<number>(0);

    // Calculs dynamiques
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);


    // Ajouter une transaction
    const addTransaction = (newTransaction: Transaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    useEffect(() => {
        // Recalculer les revenus, les dépenses et le solde calculé
        const totalIncome = transactions
            .filter((t) => t.type === "income")
            .reduce((sum, t) => sum + t.amount, 0);
        const totalExpense = transactions
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + t.amount, 0);

        setIncome(totalIncome);
        setExpense(totalExpense);

    }, [transactions]);

    // Calcul du solde restant
    const remainingBudget = fixedBudget - expense;
    //categories color
    const getCategoryClass = (category: string) => {
        switch (category) {
            case "Food":
                return "bg-red-500 text-white";
            case "Rent":
                return "bg-blue-500 text-white";
            case "Shopping":
                return "bg-green-500 text-white";
            case "Entertainment":
                return "bg-purple-500 text-black";
            case "Bill":
                return "bg-yellow-500 text-black";
            case "Unexpected":
                return "bg-lime-400 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };




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
                    {remainingBudget < 0 ? (
                        <span className="text-red-500 font-bold text-xl">Over the budget !</span>
                    ) : (
                        <span className="text-green-500 font-bold text-xl">In the  budget</span>
                    )}
                </p>
                <p className=" font-bold">Remaining Budget : {remainingBudget} €</p>
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

            {/* Affichage des transactions */}

            {/* Graphique */}
            {transactions.length > 0 && (
                <div className="flex flex-col lg:flex-row lg:justify-around items-center gap-8 mt-10">
                    <div className="w-full lg:w-1/2 justify-center">
                        <Charts transactions={transactions} />
                    </div>

                    <div className="w-full lg:w-1/2 overflow-x-auto">
                        <table className="table-auto w-full text-left text-white">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Amount (€,$)</th>
                                    <th className="px-4 py-2">Category</th>
                                    <th className="px-4 py-2">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index} className="bg-gray-800 border-b">
                                        <td className="px-4 py-2">{transaction.amount}</td>
                                        <td className={`px-4 py-2 ${getCategoryClass(transaction.category)}`}>{transaction.category}</td>
                                        <td className="px-4 py-2">
                                            {transaction.type === "income" ? "Income" : "Expense"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}








        </div>
    );
};

export default Dashboard;
