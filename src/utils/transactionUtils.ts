import { Transaction } from "../components/types/types";

// Calcul du solde restant
export const remainingBudget = (
  fixedBudget: number,
  income: number,
  expense: number
): number => {
  return fixedBudget - expense + income;
};
//categories color
export const filterTransactions = (
  transactions: Transaction[],
  filter: string
): Transaction[] => {
  if (filter === "all") return transactions;
  return transactions.filter((transaction) => transaction.type === filter);
};
