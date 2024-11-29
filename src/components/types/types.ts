export interface Transaction {
  amount: number; // Montant de la transaction
  category: string; // Catégorie (ex: nourriture, transport)
  type: "income" | "expense"; // Type (revenu ou dépense)
}

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  addTransaction: (transaction: Transaction) => void;
}
