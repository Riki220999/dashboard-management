import React from "react";
import PaginationTable from "./ProfileTable";
import { Breadcrumb, SimpleCard } from "matx";
import BadgeAutocomplete from "./shared/BadgeAutocomplete";
import RowCards from "./shared/RowCards";


const AppProfileDetail = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Agent List", path: "/profile/list" }
          ]}
        />
      </div>
      <div className="py-3" />
      <SimpleCard title="My Profile Summary">
        <p className="m-0">
          The classes are named using the format-
          <code>(property)-(size)</code>
        </p>
        <p>
          Where <em>property</em> is one of:
        </p>
        <ul>
          <li>
            <code>h</code> - for classes that set <code>height</code>
          </li>
          <li>
            <code>min-h</code> - for classes that set{" "}
            <code>minimum height</code>
          </li>
          <li>
            <code>max-h</code> - for classes that set{" "}
            <code>maximum height</code>
          </li>
          <li>
            <code>w</code> - for classes that set <code>width</code>
          </li>
          <li>
            <code>min-w</code> - for classes that set <code>minimum width</code>
          </li>
          <li>
            <code>max-w</code> - for classes that set <code>maximum width</code>
          </li>
        </ul>
        <p>
          Where <em>size</em> is one of:
        </p>
        
      </SimpleCard>
    </div>
  );
};

export default AppProfileDetail;
