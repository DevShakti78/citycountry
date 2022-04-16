import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export const Home = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/Country`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .then((res) => setSortdata(res))
      .catch((res) => console.log(err));
  }, []);

  //   console.log("data", data);

  return (
    
    <div>
       <button>Sort by Population</button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Serial NO.</StyledTableCell>
            <StyledTableCell align="right">COUNTRY NAME</StyledTableCell>
            <StyledTableCell align="right">CITY NAME</StyledTableCell>
            <StyledTableCell align="right">POPULATION</StyledTableCell>
            <StyledTableCell align="right">EDIT</StyledTableCell>
            <StyledTableCell align="right">DELETE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.country_name}</StyledTableCell>
              <StyledTableCell align="right">{row.city_name}</StyledTableCell>
              <StyledTableCell align="right">{row.population}</StyledTableCell>
              <button>Edit</button>
             
              <button>delete</button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
      <br />
      <br />
      
    </div>
  );
};