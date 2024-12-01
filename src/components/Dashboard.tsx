import Header from "./Header";
import { useState, useEffect } from "react";
import { Transaction } from "./types/types";
import ModalForm from "./ModalForm";

const Dashboard = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Budget fixe défini par l'utilisateur
    const [fixedBudget, setFixedBudget] = useState<number>(0);

    // Calculs dynamiques
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [calculatedBudget, setCalculatedBudget] = useState(0);

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
        setCalculatedBudget(totalIncome - totalExpense);
    }, [transactions]);

    // Calcul du solde restant
    const remainingBudget = fixedBudget - expense;

    return (
        <div>
            <Header />
            <div className="flex flex-col mt-12 justify-center text-center">
                <h1 className="text-white text-3xl font-doto">My Wallet</h1>
            </div>

            {/* Champ pour définir le budget fixe */}
            <div className="flex flex-col justify-around mt-7">
                <div className="flex flex-col w-1/3 text-center self-center mt-7">
                    <label className="mb-6 font-doto text-2xl text-white">
                        Définir votre budget mensuel (€)
                    </label>
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
                        placeholder="Entrer votre budget"
                    />
                </div>
            </div>

            {/* Affichage des budgets */}
            <div className="bg-white text-black p-5 rounded shadow-lg mt-5">
                <h2 className="text-lg font-bold text-center">Résumé</h2>
                <p>Revenus : {income} €</p>
                <p>Dépenses : {expense} €</p>
                <p>Solde Calculé : {calculatedBudget} €</p>
                <p>
                    Budget Fixe : {fixedBudget} € -{" "}
                    {remainingBudget < 0 ? (
                        <span className="text-red-500">Dépassement de budget !</span>
                    ) : (
                        <span className="text-green-500">Dans le budget</span>
                    )}
                </p>
                <p>Solde Restant : {remainingBudget} €</p>
            </div>

            {/* Bouton pour ajouter une transaction */}
            <button
                className="bg-white rounded mt-10 ml-5 p-4 shadow-lg font-doto hover:bg-slate-300 text-base text-black"
                onClick={() => setIsModalOpen(true)}
            >
                Ajouter une transaction
            </button>

            {/* Formulaire Modal */}
            <ModalForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                addTransaction={addTransaction}
            />

            {/* Affichage des transactions */}
            <table className="table-auto w-1/2 mt-5 text-left text-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Montant (€)</th>
                        <th className="px-4 py-2">Catégorie</th>
                        <th className="px-4 py-2">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="bg-gray-800 border-b">
                            <td className="px-4 py-2">{transaction.amount}</td>
                            <td className="px-4 py-2">{transaction.category}</td>
                            <td className="px-4 py-2">
                                {transaction.type === "income" ? "Revenu" : "Dépense"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
