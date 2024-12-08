
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { ChartsProps } from "./types/types";

// Enregistrement des éléments nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ transactions }: ChartsProps) => {
    // Calcul des données pour le graphique
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    // Données du graphique
    const data = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                data: [income, expense],
                backgroundColor: ["#00C49F", "#FF8042"],
                hoverBackgroundColor: ["#00C49F", "#FF8042"],
            },
        ],
    };

    // graphique
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div style={{ width: "100%", height: "250px", justifyItems: "center" }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default Charts;
