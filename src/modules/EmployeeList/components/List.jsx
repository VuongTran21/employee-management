import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function List({ employees }) {
  const classes = useStyles();

  const listEmployees = [];

  if (employees) {
    employees.map((employee) =>
      listEmployees.push(
        <TableRow key={employee.id}>
          <TableCell component="th" scope="row">
            {employee.first_name}
          </TableCell>
          <TableCell align="right">{employee.last_name}</TableCell>
          <TableCell align="right">{employee.email_address}</TableCell>
          <TableCell align="right">{employee.phone}</TableCell>
          <TableCell align="right">
            {employee.gender ? 'Male' : 'Female'}
          </TableCell>
          <TableCell align="right">
            <Button
              size="small"
              onClick={() => {
                alert('clicked edit');
              }}
              color="primary"
            >
              Edit
            </Button>
            <Button
              size="small"
              onClick={() => {
                alert('clicked delete');
              }}
              color="secondary"
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      )
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listEmployees}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
