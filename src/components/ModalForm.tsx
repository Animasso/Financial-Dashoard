import Modal from "react-modal";
import { Props } from "./types/types";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const ModalForm = ({ isOpen, onClose, addTransaction }: Props) => {
    const [amount, setAmount] = useState<number>(0)
    const [category, setCategory] = useState<string>("")
    const [type, setType] = useState<"income" | "expense">("income")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTransaction({ amount, category, type });
        setAmount(0);
        setCategory("");
        setType("income");
        onClose(); // Fermer la modale
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Ajouter une transaction"
            style={{
                overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond sombre
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
                <h2 className=" mb-3">Ajouter une Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Montant :</label>
                        <input
                            className=" mb-3"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
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
                    <div className=" mt-3 flex justify-center text-center" >
                        <button type="submit">Ajouter</button>
                    </div>

                </form>
            </motion.div>

        </Modal>
    )
}

export default ModalForm