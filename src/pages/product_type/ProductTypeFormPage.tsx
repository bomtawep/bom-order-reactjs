import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { postProductType, getProductType, updateProductType } from '../../redux/saga/ProductTypes';
import { useAppDispatch } from '../../hooks/hooks';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTypedSelector } from '../../redux/store';
import { useParams } from 'react-router-dom';
import * as yup from "yup";
import { Formik } from "formik";
import Snackbar from '@mui/material/Snackbar';
//import { useNavigate } from 'react-router-dom';
//import routeLink from '../../routes/routeLink';
import Alert from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import { ActionType } from '../../redux/actions/ProductTypes';

export default function ProductTypeFormPage() {
  const {form} = useTypedSelector((state) => state.reducers.ProductTypes);
  const params = useParams();
  const dispatch = useAppDispatch();
  //const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  type TransitionProps = Omit<SlideProps, 'direction'>
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
  const initialValues = {
    id: 0,
    name: '',
    is_active: false,
    created: '',
    updated: ''
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required('กรุณากรอก')

  });

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  function TransitionLeft(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
  }

  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(
        getProductType(params.id)
      )
    }
  }, [dispatch, params.id])
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
        key={transition ? transition.name : ''}
        TransitionComponent={transition}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Data saved successfully.
        </Alert>
      </Snackbar>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={async values => {
          dispatch({
            type: ActionType.PRODUCT_TYPE_SUCCESS,
            loading: true
        });
          const navi = '/product/product-type'
          if (params.id !== undefined) {
            dispatch(
              updateProductType(values, navi)
            )
            console.log('Updateee')
          } else {
            dispatch(
              postProductType(values, navi)
            )
            setTransition(() => TransitionLeft);
            setOpen(true);
          }
        }}
      >

        {props => {
          const { values, errors, handleChange, handleSubmit, handleReset, setValues } = props

          if (values.id === 0 && params.id !== undefined && Object.keys(form).length > 0) {
            setValues({
              ...values,
              ...form
            });
          }
          return (
            <form onSubmit={handleSubmit}>
              <Box sx={{ width: '100%' }}>
                <Grid container spacing={1}>
                  <Grid item xs={8} p={1}>
                    <Paper sx={{ width: '100%' }}>
                      <Box sx={{ width: '100%' }} p={5} pb={1}>
                        <TextField id="outlined-basic" label="Product type" variant="outlined"
                          type='text'
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          error={Boolean(errors.name)}
                          helperText={errors.name}
                          required
                          fullWidth={true}
                        />
                      </Box>
                      <Box sx={{ width: '100%' }} p={5}>
                        <Stack sx={{ width: '100%' }} direction="row" spacing={3} alignItems="center">
                          <Button variant="contained" color="success" type="submit">Submit</Button>
                          <Button variant="contained" color="info" onClick={handleReset}>Clear</Button>
                          <Button variant="contained" color="error" href="/product/product-type">Cancel</Button>
                        </Stack>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={4} p={1}>
                    <Paper sx={{ width: '100%' }} >
                      <Box p={5}>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Typography>Available</Typography>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={values.is_active}
                                onChange={handleChange}
                                name="is_active"
                                value={values.is_active}
                              />
                            }
                            label=""
                          />
                          <Typography>{values.is_active ? 'On' : 'OFF'}</Typography>
                        </Stack>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </form>
          )
        }}
      </Formik></Stack>
  );
}