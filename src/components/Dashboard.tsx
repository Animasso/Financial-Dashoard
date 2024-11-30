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
                className="bg-white rounded mt-10 ml-5 p-4 shadow-lg font-doto hover:bg-slate-300 text-base text-black"
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
            <table className="table-auto w-full mt-5 text-left text-white">
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
    )
}

export default Dashboard