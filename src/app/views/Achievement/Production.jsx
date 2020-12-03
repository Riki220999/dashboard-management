import React from "react";
import PaginationTable from "./ProductionTable";
import { Breadcrumb, SimpleCard } from "matx";

import { makeStyles } from "@material-ui/core/styles";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import GroupedSelect from "./shared/ModifiedSelect";
import { ModifiedPaperTabsMTDYTD,ModifiedPaperTabs } from "./shared/ModifiedPaperTabs";
import ModifiedTableCard from "./shared/ModifiedTableCard";
import ProductionExpansionPanel from "./shared/ProductionExpansionPanel";
import ProductionStatCard from './shared/ProductionStatCard';
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    seeDetailLink:{
        display:"flex",
        alignItems:"flex-end"
    }


}));    

const productionAPIData = {
    "previousAPIYear":"NET API 2019",
    "currentAPIYear":"NET API 2020",
    "APIList":[
    {
      month: "JAN",
      previousAPI: "Rp.0",
      currentAPI: "Rp.18,007,500"
    },
    {
        month: "FEB",
        previousAPI: "Rp.0",
        currentAPI: "Rp.0"
      },
      {
        month: "MAR",
        previousAPI: "Rp.0",
        currentAPI: "Rp.-56,400,000"
      },
      {
        month: "APR",
        previousAPI: "Rp.0",
        currentAPI: "Rp.-33,592,500"
      },
      {
        month: "MAY",
        previousAPI: "Rp.18,975,003.98",
        currentAPI: "Rp.-57,600,000"
      },
      {
        month: "JUN",
        previousAPI: "Rp.-6,624,999.38",
        currentAPI: "Rp.-7,200,000"
      },{
        month: "JUL",
        previousAPI: "Rp.0",
        currentAPI: "Rp.18,007,500"
      },
      {
          month: "AUG",
          previousAPI: "Rp.0",
          currentAPI: "Rp.0"
        },
        {
          month: "SEP",
          previousAPI: "Rp.0",
          currentAPI: "Rp.-56,400,000"
        },
        {
          month: "OCT",
          previousAPI: "Rp.0",
          currentAPI: "Rp.-33,592,500"
        },
        {
          month: "NOV",
          previousAPI: "Rp.18,975,003.98",
          currentAPI: "Rp.-57,600,000"
        },
        {
          month: "DES",
          previousAPI: "Rp.-6,624,999.38",
          currentAPI: "Rp.-7,200,000"
        }
  ],"APITotal":{
      previousAPI:"Rp.0",
      currentAPI:"Rp-137,992,500"
  }
    };

const AppTable = () => {
    const classes = useStyles();
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Production", path: "/achievement/production" }
          ]}
        />
      </div>
      {/* <div className="pb-24 pt-7 px-8 bg-paper"> */}
      <div className={"flex"}>
            <GroupedSelect text="Melihat sebagai " style={"flex-grow"}></GroupedSelect>
            <div className={classes.seeDetailLink}>
                <Typography className={classes.seeDetailLink+" pb-5"} >Lihat Rincian 
                        <Icon className="small-icon">arrow_forward</Icon>
                   </Typography>
            </div>
      </div>    
      <ModifiedPaperTabs></ModifiedPaperTabs>
      <ModifiedAreaChart
            height="280px"
            option={{
              series: [
                {
                  data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
                  type: "line"
                },
                {
                    data: [36, 22, 17, 21, 57, 56, 31, 56, 39, 33, 12, 21],
                    type: "line"
                }
              ],
              xAxis: {
                nameTextStyle:{
                    padding:[20,0,0,0]
                },  
                position: 'top',
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec"
                ]
              },
              yAxis:{
                name:"dalam jutaan",
                nameLocation:"middle",
                max:100,
                min:0,
                type: 'value',
                axisLabel: {
                inside: true,
                margin: -30
                }
              }

            ,title:{
                show:true,
                text:"PRODUCTION 2020"
            }
            
            }}
          ></ModifiedAreaChart>
       <ProductionExpansionPanel APIData={productionAPIData}></ProductionExpansionPanel>
       <ModifiedPaperTabsMTDYTD></ModifiedPaperTabsMTDYTD>
       <ProductionStatCard></ProductionStatCard>
       {/* <ModifiedTableCard></ModifiedTableCard>
      <div className="py-3" />
      
      <SimpleCard title="Production Data">
        <PaginationTable />
      </SimpleCard> */}
    </div>
  );
};

export default AppTable;
