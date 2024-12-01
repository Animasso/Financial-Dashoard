import Modal from "react-modal";
import { Props } from "./types/types";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const ModalForm = ({ isOpen, onClose, addTransaction }: Props) => {
    const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [type, setType] = useState<"income" | "expense">("income")

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setAmount(value);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!amount || category.trim() === "") {
            alert("Tous les champs sont requis !");
            return;
        }

        addTransaction({ amount: Number(amount), category, type });
        setAmount("");
        setCategory("");
        setType("income");
        onClose();
    };
    return (
        <Modal
            isOpen={isOpen}
            aria-label="Fermer la modale"
            onRequestClose={onClose}
            contentLabel="Ajouter une transaction"
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "50px",
                    borderRadius: "10px",
                    width: "400px",
                    fontFamily: "Doto, sans-serif",
                    fontSize: "20px",
                    color: "#333",
                    lineHeight: "1.5",
                    marginBottom: "5px",
                },
            }}
        >
            <button
                onClick={onClose}
                style={{
                    background: "none",
                    border: "none",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                }}
            >
                <IoMdCloseCircle />
            </button>
            <motion.div initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className=" mb-3 text-3xl">Ajouter une Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Montant :</label>
                        <input
                            className=" mb-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:ring-blue-500 focus:border-blue-500"
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Catégorie :</label>
                        <input
                            className=" mb-3"
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Type :</label>
                        <select value={type} className=" mb-3" onChange={(e) => setType(e.target.value as "income" | "expense")}>
                            <option value="income">Revenu</option>
                            <option value="expense">Dépense</option>
                        </select>
                    </div>
                    <div className=" mt-7 flex justify-center text-center" >
                        <button className=" hover:bg-slate-500 w-3/4 bg-gray-700 rounded-lg py-4 px-4 shadow-lg font-sans text-base text-white" type="submit">Ajouter</button>
                    </div>

                </form>
            </motion.div>

        </Modal>
    )
}

export default ModalForm