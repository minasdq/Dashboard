import React from "react"

import Table from "../components/table/table"

import customersList from "../assets/json/customersList.json"

const tableCustomers = {
  head: [
    "id",
    "name",
    "email",
    "location",
    "phone",
    "total spend",
    "total orders",
  ],
  body: customersList,
}

const renderHeadTable = (item, index) => <th key={index}>{item}</th>

const renderBodyTable = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.location}</td>
    <td>{item.phone}</td>
    <td>{item.total_spend}</td>
    <td>{item.total_orders}</td>
  </tr>
)

const Customers = () => {
  return (
    <div>
      <h1 className="page-header">Customers</h1>
      <div className="card">
        <div className="body">
          <Table
            limit={10}
            dataHead={tableCustomers.head}
            renderHead={renderHeadTable}
            dataBody={tableCustomers.body}
            renderBody={renderBodyTable}
          />
        </div>
      </div>
    </div>
  )
}

export default Customers
