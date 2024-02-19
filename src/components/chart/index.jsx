import Chart from 'react-apexcharts';

const options = {
    labels: ["Income", "Expense"],
    colors: ["#FF0000", "#0000FF"],
    chart: {
        width: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#FF0000", "#0000FF"],
    },
    tooltip: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColorL: "#000000",
        },
    },
};

export default function TransactionChartSummary({expense = 100, income = 100}) {
    return <Chart
        options={options}
        series={[income, expense]}
        type="pie"
        width={"100%"}
        height={"100%"}
    />
}