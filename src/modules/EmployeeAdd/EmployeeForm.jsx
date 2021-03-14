import { useForm, Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';

const EmployeeForm = ({ store }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const gender = data.gender === 'male';
    const formData = { ...data, gender };

    store(formData);
  };

  return (
    <Grid item>
      <Grid item>
        <Box>
          <Typography>
            Employee Form
          </Typography>
        </Box>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid item>
            <Paper>
              <Box p={2}>
                <FormControl>
                  <InputLabel htmlFor="my-input">First Name</InputLabel>
                  <Controller
                    name="first_name"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input onChange={onChange} value={value} />
                    )}
                  />
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Box p={2}>
                <FormControl>
                  <InputLabel htmlFor="my-input">Last Name</InputLabel>
                  <Controller
                    name="last_name"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input onChange={onChange} value={value} />
                    )}
                  />
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Box p={2}>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email</InputLabel>
                  <Controller
                    name="email_address"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input onChange={onChange} value={value} />
                    )}
                  />
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Box p={2}>
                <FormControl>
                  <InputLabel htmlFor="my-input">Phone</InputLabel>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value }) => (
                      <Input onChange={onChange} value={value} />
                    )}
                  />
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Box p={2}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue="male"
                    render={({ onChange, value }) => (
                      <RadioGroup
                        aria-label="gender"
                        name="gender"
                        value={value}
                        onChange={onChange}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          <Input type="submit" />
        </Grid>
      </form>
    </Grid>
  );
};

export default EmployeeForm;
