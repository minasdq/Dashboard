import React, { useState } from "react"

import "./table.css"

const Table = ({ dataHead, renderHead, dataBody, renderBody, limit }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const getInitialData = () =>
    limit && dataBody && renderBody ? dataBody.slice(0, limit) : dataBody

  const [currentData, setCurrentData] = useState(getInitialData)
  const totalPages = [
    ...Array(
      dataBody && renderBody && Math.ceil(dataBody.length / limit)
    ).keys(),
  ]

  const changePage = (page) => {
    setCurrentData(dataBody.slice(limit * page, limit * (page + 1)))
    setCurrentPage(page+1)
  }

  const renderPagination = () =>
    totalPages.map((item, index) => (
      <div
        key={index}
        onClick={() => changePage(index)}
        className={`
        table__pagination__item ${
          index + 1 === currentPage ? "table__pagination__item--active" : ""
        } `}
      >
        {item + 1}
      </div>
    ))

  return (
    <div className="table-wrapper">
      <table>
        {dataHead && renderHead ? (
          <thead>{dataHead.map(renderHead)}</thead>
        ) : null}
        {currentData && renderBody ? (
          <tbody>{currentData.map(renderBody)}</tbody>
        ) : null}
      </table>
      <div className="table__pagination">{renderPagination()}</div>
    </div>
  )
}

export default Table
