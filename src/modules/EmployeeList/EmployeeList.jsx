import { Box, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from './components/List';

function EmployeeList({ employeeList, getListEmployee }) {
  useEffect(() => {
    getListEmployee();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Box component="div">
          <Link to="/employee/add">Add</Link>
        </Box>
      </Grid>
      <Grid>
        <List employees={employeeList.employees} />
      </Grid>
    </Grid>
  );
}

export default EmployeeList;
