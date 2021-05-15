import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as yup from "yup";
import { useFormik } from "formik";
import Header from "../../Layout/Header/Header";
const validationSchema = yup.object({
  firstname: yup
    .string("Enter your firstname")
    .email("Enter a valid firstname")
    .required("firstname is required"),
  lastname: yup
    .string("Enter your lastname")
    .email("Enter a valid lastname")
    .required("lastname is required"),
  address1: yup
    .string("Enter your address1")
    .email("Enter a valid address1")
    .required("address1 is required"),
  city: yup
    .string("Enter your city")
    .email("Enter a valid city")
    .required("city is required"),
  state: yup
    .string("Enter your state")
    .email("Enter a valid state")
    .required("state is required"),
  zip: yup
    .string("Enter your zip")
    .email("zip a valid firstname")
    .required("zip is required"),
  country: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});
export default function AddressForm() {
  // const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstname:'',
      lastname:'',
      address1:'',
      address2:'',
      city:'',
      state:'',
      zip:'',
      country:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <Header />
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form
          // className={classes.form}
          onSubmit={formik.handleSubmit}
          noValidate
        >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      </form>
    </React.Fragment>
  );
}
