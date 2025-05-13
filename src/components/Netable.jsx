import React from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Netable = () => {
  const rows =[{name:1,age:20,place:"CAPE"},{name:2,age:20,place:"TVC"},{name:3,age:20,place:"NCJ"}]
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          {/* <TableCell align="right">Name</TableCell> */}
          <TableCell align="right">Age</TableCell>
          <TableCell align="right">Place</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.age}</TableCell>
            <TableCell align="right">{row.place}</TableCell>
            {/* <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

  
}

export default Netable
