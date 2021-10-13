import React from "react"
import { Link } from "react-router-dom"
import Chart from "react-apexcharts"

import Badge from "../components/badge/badge"
import StatusCard from "../components/statusCard/statusCard"
import Table from "../components/table/table"

import statusCards from "../assets/json/statusCards.json"
import topCustomers from "../assets/json/topCustomers.json"
import latestCustomers from "../assets/json/latestCustomers.json"

const chartOptions = {
  options: {
    id: "Sales Status",
    background: "transparent",
    color: ["#6ab04c", "#2980b9"],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
    },
    legend: {
      position: "top",
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
  },
  series: [
    {
      name: "Online Customers",
      data: [30, 40, 45, 50, 45, 55, 55, 40],
    },
    {
      name: "Store Customers",
      data: [40, 50, 35, 10, 20, 30, 40, 50],
    },
  ],
}
const topCustomersHead = ["username", "order", "price"]
const latestCustomersHead = ["id", "user", "date", "price", "status"]
const orderStatus = {
  shopping: "primary",
  pending: "warning",
  paid: "success",
  refused: "danger",
}

const renderTopCustomersHead = (item, index) => <th key={index}>{item}</th>

const renderTopCustomersBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const renderLatestCustomersHead = (item, index) => <th key={index}>{item}</th>

const renderLatestCustomersBody = (item) =>
  console.log(item) || (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.date}</td>
      <td>{item.price}</td>
      <td>
        <Badge title={item.status} type={orderStatus[item.status]} />
      </td>
    </tr>
  )

const Dashboard = () => {
  return (
    <>
      <h1 className="page-header">Dashboard</h1>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div key={index} className="col-6">
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              type="line"
              xaxis={chartOptions.xaxis}
              series={chartOptions.series}
              options={chartOptions.options}
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <h3 className="card__header">Top Customers</h3>
            <div className="card__body">
              <Table
                dataHead={topCustomersHead}
                renderHead={renderTopCustomersHead}
                dataBody={topCustomers}
                renderBody={renderTopCustomersBody}
              />
            </div>
            <div className="card__footer">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <h3 className="card__header">Latest Orders</h3>
            <div className="card__body">
              <Table
                dataHead={latestCustomersHead}
                renderHead={renderLatestCustomersHead}
                dataBody={latestCustomers}
                renderBody={renderLatestCustomersBody}
              />
            </div>
            <div className="card__footer">
              <Link to="/">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
