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
export interface PieChartOptions {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}
export interface ChartsProps {
  transactions: Transaction[];
}
