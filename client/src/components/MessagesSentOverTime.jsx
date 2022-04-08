import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let date = new Date(Date.now())

const data = [
  {
    name: new Date(date - 7 * 24 * 60 * 60 * 1000).toDateString(),
    Messages: 460,
  },
  {
    name: new Date(date - 6 * 24 * 60 * 60 * 1000).toDateString(),
    Messages: 1214,
  },
  {
    name: new Date(date - 5 * 24 * 60 * 60 * 1000).toDateString(),
    Messages: 2902,
  },
  {
    name: new Date(date - 4 * 24 * 60 * 60 * 1000).toDateString(),
    Messages: 8355,
  },
  {
    name: new Date(date - 3 * 24 * 60 * 60 * 1000).toDateString(),
    Messages: 14364,
  },
  {
    name: new Date(date - 2 * 24 * 60 * 60 * 1000).toDateString(),
    Messages: 21128,
  },
  {
    name: date.toDateString(),
    Messages: 49166,
  },
];

export default class MessagesSentOverTime extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Messages" stroke="#8884d8" activeDot={{ r: 8 }} />
      
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
