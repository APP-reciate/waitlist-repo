import { FC, useState } from 'react';
import './styles.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userCollection } from '../firebase';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import CircularProgress from '@mui/material/CircularProgress';


interface FormData {
  name: string;
  email: string;
}

const Form: FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const handleRegistration: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    
      const result = await userCollection(data);

      if (!result) {
        enqueueSnackbar("An unknown error occurred.", { autoHideDuration: 6000, variant: "error" });
        return;
      }
      if (result.status === "duplicate") {
        enqueueSnackbar(result.message, { autoHideDuration: 6000, variant: "error" });
        setLoading(false);
    } else if (result.status === "success") {
        enqueueSnackbar("User added successfully!", { autoHideDuration: 6000, variant: "success" });
        setLoading(false);
    } else {
        enqueueSnackbar("An error occurred while adding the user.", { autoHideDuration: 6000, variant: "error" });
        setLoading(false);
    }
  };

  return (
    <SnackbarProvider autoHideDuration={6000} >
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <input {...register('name', { required: true })} placeholder='Tell us your name'/>
        </div>
        {errors.name && <p>This field is required*</p>}
        <div>
          <input type="email" {...register('email', { required: true })} placeholder='Enter your email address'/>
        </div>
        {errors.email && <p>This field is required*</p>}
        <button type='submit' disabled={loading}>{loading ? <CircularProgress sx={{ color: '#000000' }} size={24} /> : 'Join our waitlist'}</button>
      </form>
    </SnackbarProvider>
  );
};

export default Form;
