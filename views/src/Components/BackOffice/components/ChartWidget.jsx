import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Label,
} from "recharts";

const ChartWidget = ({ title, info, chartTitle, aspect, data, dataKeyX, dataKeyY, color }) => {
  return (
    <div className="py-10 pb-20  border-b-2 flex flex-col space-y-16 xl:space-y-0 xl:flex-col justify-around xl:pt-10 xl:px-10 xl:pb-15">
      <div className="flex flex-col lg:flex-col justify-between gap-2">
        <div className="flex flex-col lg:flex-col justify-center lg:items-center">
          <p className="text-2xl font-bold opacity-80">{title}</p>
          <p className="text-lg opacity-80 pb-3">
            {info}
          </p>
        </div>
      </div>
      <div className="flex h-full justify-center items-center border px-6 lg:px-10 py-16 gap-12 rounded-lg bg-gradient-to-b from-teal-50 to-white">
        <div className="flex flex-col 2xl:w-2/4 gap-6 z-10">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold gap-4 opacity-80">{chartTitle}</p>
          </div>
            <ResponsiveContainer width={800} height={250}>
              <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey={dataKeyX} stroke="gray">
                  <Label
                    value={dataKeyX}
                    offset={-10}
                    position="insideBottom"
                  />
                </XAxis>
                <YAxis>
                  <Label
                    value={dataKeyY}
                    angle={-90}
                    position="left"
                    dy="-10"
                  />
                </YAxis>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey={dataKeyY}
                  stroke={color}
                  fillOpacity={1}
                  fill="url(#total)"
                />
              </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartWidget;
