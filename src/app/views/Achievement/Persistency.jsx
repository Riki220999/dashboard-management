import React from "react";
import PaginationTable from "./PersistencyTable";
import { Breadcrumb, SimpleCard } from "matx";

const AppTable = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Persistency", path: "/achievement/persistency" }
          ]}
        />
      </div>
      <div className="py-3" />
      <SimpleCard title="Persistency Data">
        <PaginationTable />
      </SimpleCard>
    </div>
  );
};

export default AppTable;
