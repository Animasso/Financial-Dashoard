import Modal from "react-modal";
import { Props } from "./types/types";
import { useState } from "react";

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
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "400px",
                },
            }}
        >
            <h2>Ajouter une Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Montant :</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        required
                    />
                </div>
                <div>
                    <label>Catégorie :</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Type :</label>
                    <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
                        <option value="income">Revenu</option>
                        <option value="expense">Dépense</option>
                    </select>
                </div>
                <button type="submit">Ajouter</button>
                <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
                    Annuler
                </button>
            </form>
        </Modal>
    )
}

export default ModalForm