
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ChartsProps } from "./types/types";


ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ income, expense }: ChartsProps) => {

    // Données du graphique
    const data = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                data: [income, expense],
                backgroundColor: ["#dd7b20", "#92330a"],
                hoverBackgroundColor: ["#a35d1c", "#551e07"],
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
