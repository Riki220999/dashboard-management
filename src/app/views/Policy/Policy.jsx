import React from "react";
import PaginationTable from "./PolicyTable";
import { Breadcrumb, SimpleCard } from "matx";
import BadgeAutocomplete from "./shared/BadgeAutocomplete";

const AppTable = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Policy", path: "/policy/detail" }
          ]}
        />
      </div>
      <div className="py-1" />
      <div className={"flex"}>
        <BadgeAutocomplete style={"flex-grow"} ></BadgeAutocomplete>
        {/* <BadgeAutocomplete style={"flex-grow"} ></BadgeAutocomplete> */}
        
      </div>
      
      <div className="py-1" />
      <SimpleCard title="Policy Data" >
        <PaginationTable />
      </SimpleCard>
    </div>
  );
};

export default AppTable;
