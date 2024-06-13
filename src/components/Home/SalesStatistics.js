import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe
             style={{
              background: "#FFFFFF",
              border: "none",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-shoeshop-tutorial-kwdmijh/embed/charts?id=66291329-1200-4e40-8489-699568f5e5fc&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  )
}

export default SaleStatistics;