import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompanyMetrics from "./CompanyMetrics";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.username) navigate("/zentrades-task3-4");
    console.log(state);
  }, [state]);
  return (
    <div
      style={{ backgroundColor: "#F3F0EB" }}
      className="d-flex flex-column px-5">
      <div className="mt-3 fw-semibold fs-5">
        <p>Company Metrics</p>
      </div>
      <CompanyMetrics />
      <div className="mt-5 d-flex flex-row w-100 justify-content-between mb-5">
        <div style={{ width: "48%" }}>
          <p className="fw-semibold fs-5">Revenue By Job Location</p>
          <Chart
            options={{
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              colors: ["#00E396"],
              dataLabels: {
                formatter: function (val, opt) {
                  const goals =
                    opt.w.config.series[opt.seriesIndex].data[
                      opt.dataPointIndex
                    ].goals;

                  if (goals && goals.length) {
                    return `${val} / ${goals[0].value}`;
                  }
                  return val;
                },
              },
              legend: {
                show: true,
                showForSingleSeries: true,
                customLegendItems: ["Revenue for November 2019"],
              },
            }}
            series={[
              {
                name: "Revenue for November 2019",
                data: [
                  {
                    x: "Everett",
                    y: 81000,
                  },
                  {
                    x: "Seattle",
                    y: 76000,
                  },
                  {
                    x: "Lynnwood",
                    y: 49000,
                  },
                  {
                    x: "Bothell",
                    y: 47500,
                  },
                  {
                    x: "Mukilteo",
                    y: 46000,
                  },
                  {
                    x: "Edmonds",
                    y: 33000,
                  },
                ],
              },
            ]}
            type="bar"
            width="100%"
            className="bg-white"
          />
        </div>
        <div style={{ width: "48%" }}>
          <p className="fw-semibold fs-5">Revenue By Job Type</p>
          <Chart
            options={{
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              colors: ["#00E396"],
              dataLabels: {
                formatter: function (val, opt) {
                  const goals =
                    opt.w.config.series[opt.seriesIndex].data[
                      opt.dataPointIndex
                    ].goals;

                  if (goals && goals.length) {
                    return `${val} / ${goals[0].value}`;
                  }
                  return val;
                },
              },
              legend: {
                show: true,
                showForSingleSeries: true,
                customLegendItems: ["Revenue for November 2019"],
              },
            }}
            series={[
              {
                name: "Revenue for November 2019",
                data: [
                  {
                    x: "Service Plumbing",
                    y: 183000,
                  },
                  {
                    x: "Bid Work HVAC",
                    y: 129000,
                  },
                  {
                    x: "Service HVAC",
                    y: 79000,
                  },
                  {
                    x: "Bid Work Plumbing",
                    y: 77000,
                  },
                  {
                    x: "HWT Replcement",
                    y: 46000,
                  },
                  {
                    x: "Maintenance",
                    y: 43000,
                  },
                  {
                    x: "Material Sale",
                    y: 4000,
                  },
                ],
              },
            ]}
            type="bar"
            width="100%"
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
