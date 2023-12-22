import React from "react";
import Filter from "./Companets/Filter";
import Table from "./Companets/Table";

function Index() {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-12">
            <Filter />
          </div>
          <div className="col-12">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
