import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
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
  const handleescSort=(field,asc=true)=>{
    const sortdata = data.sort((a,b)=>{
  
      if(asc){
        return a[field]-b[field]
      }
     
        return b[field]-a[field]
      
      
    })
    setData([...sortdata])
  }
  return (
    
    <div>
       <Button onClick={()=>handleescSort("population")} variant="contained" >
       Sort by Population
</Button>
      
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
               <h2>{row.id}</h2> 
              </StyledTableCell>
              <StyledTableCell align="right"><h3>{row.country_name}</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>{row.city_name}</h3></StyledTableCell>
              <StyledTableCell align="right"><h3>{row.population}</h3></StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" color="success">
edit
</Button>
              </StyledTableCell>
            
              <StyledTableCell align="right">
              <Button variant="outlined" color="error">
  Delete
</Button>
              </StyledTableCell>
           
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