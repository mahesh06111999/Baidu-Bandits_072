import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Heading } from '@chakra-ui/react';

export const BarGraph = ({ data }) => {
  // Prepare the data for the graph
  const graphData = data.days.map((day, index) => ({
    day,
    steps: parseInt(data.steps[index], 10) || 0,
    calories: data.calories[index] || 0,
    exerciseTime: data.exerciseTime[index] || 0,
  }));

  return (
    <Box width="100%" height={300}>
      <ResponsiveContainer>
        <BarChart data={graphData} margin={{ top:5, right:5, left:5, bottom:5}}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="steps" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
          <Bar dataKey="exerciseTime" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};


