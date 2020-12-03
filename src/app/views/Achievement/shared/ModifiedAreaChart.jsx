import React from "react";
import ReactEcharts from "echarts-for-react";
import { merge } from "lodash";

const defaultOption = {
  grid: {
    top: 70,
    left: 50,
    right: 16,
    bottom: 32
  },
  legend: {},
  tooltip: {
    show: true,
    trigger: "axis",

    axisPointer: {
      type: "cross",
      lineStyle: {
        opacity: 0
      }
    },
    crossStyle: {
      color: "#ccc"
    }
  },
  series: [
    {
      smooth: true,
      lineStyle: {
        width: 3,
        color: "#0066CC"
      },
      symbolSize:10
    },
    {
      smooth: true,
      lineStyle: {
        width: 3,
        color: "#99CCFF"
      },
      symbolSize:10
    }

  ],
  xAxis: {
    show: true,
    type: "category",
    showGrid: true,
    boundaryGap: false,
    axisLabel: {
      color: "#ccc",
      margin: 20
    },
    axisLine: {
      show: true
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#ccc"
      }
    }
  },
  yAxis: {
    type: "value",
    min: 10,
    max: 60,
    axisLabel: {
      color: "#ccc",
      margin: 20,
      fontSize: 13,
      fontFamily: "FS-Albert-Pro",
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#ccc"
      }
    },
    
    axisLine: {
      show: true
    },
    axisTick: {
      show: true
    },
    nameTextStyle:{
      fontFamily: "FS-Albert-Pro",
      fontStyle: "italic",
      padding:[0,0,20,0]
    }
  },
  color: [
    {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(104, 115, 112,0.3)" // color at 0% position
        },
        {
          offset: 1,
          color: "rgba(104, 115, 112,0)" // color at 100% position
        }
      ],
      global: false // false by default
    }
  ]
};

const ModifiedAreaChart = ({ height, option }) => {
  return (
    <ReactEcharts
      style={{ height: height}}
      option={merge({}, defaultOption, option)}
    />
  );
};

export default ModifiedAreaChart;
