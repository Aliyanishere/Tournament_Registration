import * as React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  createStyles,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Container from '@mui/material/Container';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgb(255,180,0) !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(255,180,0)',
        borderWidth: "2px",
        borderRadius: "25px",
        boxShadow: "2px 2px 1px rgba(255,180,0,0.8)"
      },
      '&:hover fieldset': {
        borderColor: 'rgb(255,180,0)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(255,180,0)',
      }
    },
  },
})(TextField);

const useStyles = makeStyles((theme) =>
  createStyles({
    margin: {
      marginBottom: "50px"
    },
    input: {
      height: 120,
      color: "rgb(255,180,0)",
    },
    inputColor: {
      color: "rgb(255,180,0)",
    }
  }),
);

function App() {

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      team_name: "",
      team_mem_names: "",
      leaders_id: "",
      mobile_no: "",
      whatsapp_no: "",
      leaders_email: ""
    },
    validationSchema: Yup.object({
      team_name: Yup
        .string()
        .required("Required*"),
      team_mem_names: Yup
        .string()
        .required("Required*"),
      leaders_id: Yup
        .string()
        .required("Required*"),
      mobile_no: Yup
        .number()
        .required("Required*"),
      whatsapp_no: Yup
        .number()
        .required("Required*"),
      leaders_email: Yup
        .string()
        .email("Enter valid email")
        .required("Required*")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div className="App">
      <div className='bg_img'>
        <h1>Registration Form</h1>
      </div>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <CssTextField
            className={classes.margin}
            label="Team name"
            variant="outlined"
            type="text"
            name='team_name'
            fullWidth
            id="custom-css-outlined-input"
            InputProps={{
              className: classes.inputColor
            }}
            InputLabelProps={{
              style: { color: 'rgb(255,180,0,0.8)' }
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.team_name}
            error={formik.touched.team_name && Boolean(formik.errors.team_name)}
            helperText={formik.touched.team_name && formik.errors.team_name}
          />

          <br />

          <CssTextField
            className={classes.margin}
            label="Team members name"
            variant="outlined"
            type="text"
            name='team_mem_names'
            fullWidth
            multiline
            rows={4}
            id="custom-css-outlined-input"
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              style: { color: 'rgb(255,180,0,0.8)' }
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.team_mem_names}
            error={formik.touched.team_mem_names && Boolean(formik.errors.team_mem_names)}
            helperText={formik.touched.team_mem_names && formik.errors.team_mem_names}
          />

          <br />

          <CssTextField
            className={classes.margin}
            label="Squad leader's id"
            variant="outlined"
            type="text"
            name='leaders_id'
            fullWidth
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'rgb(255,180,0,0.8)' }
            }}
            InputProps={{
              className: classes.inputColor
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.leaders_id}
            error={formik.touched.leaders_id && Boolean(formik.errors.leaders_id)}
            helperText={formik.touched.leaders_id && formik.errors.leaders_id}
          />

          <br />

          <CssTextField
            className={classes.margin}
            label="Mobile No."
            variant="outlined"
            type="number"
            name='mobile_no'
            fullWidth
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'rgb(255,180,0,0.8)' }
            }}
            InputProps={{
              className: classes.inputColor
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile_no}
            error={formik.touched.mobile_no && Boolean(formik.errors.mobile_no)}
            helperText={formik.touched.mobile_no && formik.errors.mobile_no}
          />

          <br />

          <CssTextField
            className={classes.margin}
            label="Whatsapp No."
            variant="outlined"
            type="number"
            name='whatsapp_no'
            fullWidth
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'rgb(255,180,0,0.8)' }
            }}
            InputProps={{
              className: classes.inputColor
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.whatsapp_no}
            error={formik.touched.whatsapp_no && Boolean(formik.errors.whatsapp_no)}
            helperText={formik.touched.whatsapp_no && formik.errors.whatsapp_no}
          />

          <br />

          <CssTextField
            className={classes.margin}
            label="Leader's Email"
            variant="outlined"
            type="email"
            name='leaders_email'
            fullWidth
            id="custom-css-outlined-input"
            InputLabelProps={{
              style: { color: 'rgb(255,180,0,0.8)' }
            }}
            InputProps={{
              className: classes.inputColor
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.leaders_email}
            error={formik.touched.leaders_email && Boolean(formik.errors.leaders_email)}
            helperText={formik.touched.leaders_email && formik.errors.leaders_email}
          />

          <br />
          <p>Payment proof :</p><br /><br />
          <input className='file' type="file" />

          <br />

          <button type='submit'>Submit</button>
        </form>
      </Container>
    </div >
  );
}

export default App;