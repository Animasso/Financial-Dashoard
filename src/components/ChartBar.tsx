import { ChartBarProps } from './types/types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartBar = ({ income, expense, fixedBudget, budgetRemaining }: ChartBarProps) => {
    const data = [
        { name: "Fixed Budget", fixedBudget },
        { name: "Budget Remaining", budgetRemaining },
        { name: "Expense", expense },
        { name: "Income", income },
    ];

    return (
        <div style={{ width: "100%", height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 40,
                        left: 40,
                        bottom: 10,
                    }}
                    barSize={60}
                    barCategoryGap="20%"
                    barGap={0}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 14 }}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="fixedBudget" fill="#de462b" name="Fixed Budget" />
                    <Bar dataKey="budgetRemaining" fill="#d2a228" name="Budget Remaining" />
                    <Bar dataKey="expense" fill="#1ee410" name="Expense" />
                    <Bar dataKey="income" fill="#418d4c" name="Income" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartBar;
