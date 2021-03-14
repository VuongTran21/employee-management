import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import EmployeeListContainer from './modules/EmployeeList/EmployeeListContainer';
import EmployeeAddContainer from './modules/EmployeeAdd/EmployeeAddContainer';
import EmployeeEditContainer from './modules/EmployeeEdit/EmployeeEditContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/employee/list" />
          </Route>
          <Route exact path="/employee/list">
            <EmployeeListContainer />
          </Route>
          <Route path="/employee/edit/:id">
            <EmployeeEditContainer />
          </Route>
          <Route exact path="/employee/add">
            <EmployeeAddContainer />
          </Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

App.propTypes = {
  employee: PropTypes.array,
  loading: PropTypes.bool,
};

App.defaultProps = {
  employees: [],
  loading: false,
};

export default App;
