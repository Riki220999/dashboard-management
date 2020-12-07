import React from "react";
import PaginationTable from "./ProfileTable";
import { Breadcrumb, SimpleCard } from "matx";
import BadgeAutocomplete from "./shared/BadgeAutocomplete";
import RowCards from "./shared/RowCards";


const AppTable = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Agent List", path: "/profile/list" }
          ]}
        />
      </div>
      <div className="py-1" />
      <div className={"flex"}>
        <BadgeAutocomplete style={"flex-grow"} ></BadgeAutocomplete>
        {/* <BadgeAutocomplete style={"flex-grow"} ></BadgeAutocomplete> */}
        
      </div>
      <div className="py-1" />
      {/* <SimpleCard title="Agent List" > */}
        <RowCards />
      {/* </SimpleCard> */}
    </div>
  );
};

export default AppTable;
