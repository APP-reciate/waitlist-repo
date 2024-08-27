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
    try {
      await userCollection(data);
      enqueueSnackbar("You have successfully joined the waitlist!", { variant: "success", persist: true });
    } catch (e) {
      enqueueSnackbar("Failed to join the waitlist. Please try again.", { variant: "error", persist: true });
    } finally {
      setLoading(false);
    }

  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <SnackbarProvider />
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
  );
};

export default Form;
