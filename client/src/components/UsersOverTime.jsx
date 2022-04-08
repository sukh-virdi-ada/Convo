import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let date = new Date(Date.now())

const data = [
  {
    name: new Date(date - 7 * 24 * 60 * 60 * 1000).toDateString(),
    Users: 32,
  },
  {
    name: new Date(date - 6 * 24 * 60 * 60 * 1000).toDateString(),
    Users: 88,
  },
  {
    name: new Date(date - 5 * 24 * 60 * 60 * 1000).toDateString(),
    Users: 164,
  },
  {
    name: new Date(date - 4 * 24 * 60 * 60 * 1000).toDateString(),
    Users: 402,
  },
  {
    name: new Date(date - 3 * 24 * 60 * 60 * 1000).toDateString(),
    Users: 855,
  },
  {
    name: new Date(date - 2 * 24 * 60 * 60 * 1000).toDateString(),
    Users: 1512,
  },
  {
    name: date.toDateString(),
    Users: 2210,
  },
];

export default class UsersOverTime extends PureComponent {
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
          <Line type="monotone" dataKey="Users" stroke="#8884d8" activeDot={{ r: 8 }} />
      
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
