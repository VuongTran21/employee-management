import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export default function EmployeeEdit({ employeeEdit, getEmployee }) {
  const { id } = useParams();
  useEffect(() => {
    getEmployee(id);
  }, []);
  let data = null;

  if (employeeEdit.employee) {
    const employee = employeeEdit.employee;
    data = (
      <TableRow>
        <TableCell component="th" scope="row">
          {employee.first_name}
        </TableCell>
        <TableCell align="right">{employee.last_name}</TableCell>
        <TableCell align="right">{employee.email_address}</TableCell>
        <TableCell align="right">{employee.phone}</TableCell>
        <TableCell align="right">{employee.gender ? 'Male' : 'Female'}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{data && data}</TableBody>
      </Table>
    </TableContainer>
  );
}
