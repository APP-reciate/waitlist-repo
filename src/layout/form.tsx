import { FC } from 'react';
import './styles.scss';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

const Form: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const handleRegistration: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <input {...register('name')} placeholder='Tell us your name'/>
      </div>
      <div>
        <input type="email" {...register('email')} placeholder='Enter your email address'/>
      </div>
      <button>Join our waitlist</button>
    </form>
  );
};

export default Form;
