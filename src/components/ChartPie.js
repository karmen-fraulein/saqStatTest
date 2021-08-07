import React, {useEffect, useState} from "react";
import {PieChart, Pie, Tooltip, Cell} from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "../api";


const useStyles = makeStyles((theme) => ({
  chartPie: {
    display: 'flex',
    justifyContent: 'center',

  },
}))



function ChartPie() {
  const classes = useStyles();
  const [data, setData] = useState([]);


  useEffect(() => {
    
      api.then((dataFetch) => {
          let tmp =[]
        dataFetch.arr.children.map((el) =>
          tmp.push({name: el.name, value: el.weight})
        );
        setData(tmp)
      });
  }, []);
console.log(data)
  const COLORS = [
    "#ffcccc",
    "#99d6ff",
    "#b3cccc",
    "#adc2eb",
    "#ffb3d1",
    "#e6b3b3",
    "#ccccb3",
    "#ffd699",
    "#9fdfbf",
    "#9fbfdf",
    "#bfbfbf",
    "#e6b3b3",
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={classes.chartPie}>
      <PieChart width={200} height={200} >
        <Pie
          dataKey='value'
          isAnimationActive={true}
          label={renderCustomizedLabel}
          data={data}
          cx={80}
          cy={100}
          outerRadius={80}
          fill="red"
          labelLine={false}
        
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default ChartPie;
