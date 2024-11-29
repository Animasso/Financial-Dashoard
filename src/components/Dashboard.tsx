import Header from "./Header"
import { useState } from "react"
import { Transaction } from "./types/types"
import ModalForm from "./ModalForm"



const Dashboard = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const addTransaction = (newTransaction: Transaction) => {
        setTransactions([...transactions, newTransaction])
    }

    return (
        <div>
            <Header />
            <button
                className="bg-white rounded ml-5 p-4 shadow-lg font-doto hover:bg-slate-300 text-base text-black"
                onClick={() =>
                    setIsModalOpen(true)
                }
            >
                Ajouter une transaction
            </button>
            <ModalForm isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                addTransaction={addTransaction} />
            {/* Affichage des transactions */}
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.amount} € - {transaction.category} (
                        {transaction.type === "income" ? "Revenu" : "Dépense"})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard