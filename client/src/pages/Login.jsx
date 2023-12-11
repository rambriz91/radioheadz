import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Carousel from '../components/Carousel';


const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-[#43484d]'>
    <div className='container mx-auto my-8 p-4 max-w-md bg-[#43484d] text-[#ffa62e]'>
      <Link to='/signup' className='block mb-4 text-[#ffa62e]'>← Go to Signup</Link>

      
<div className='text-center mb-4'>
      <h2 className='text-2xl font-oleo-script mt-3'>Login</h2>
      </div>
      <form onSubmit={handleFormSubmit} className='space-y-4'>
        <div className='flex-row space-between my-2'>
          <label htmlFor='email' className='block mb-1'>Email address:</label>
          <input
            placeholder='youremail@test.com'
            name='email'
            type='email'
            id='email'
            className='w-full px-4 py-2 rounded border border-gray-300'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='pwd'className='block mb-1'>Password:</label>
          <input
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            className='w-full px-4 py-2 rounded border border-gray-300'
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className='error-text'>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className='text-center'>
          <button type='submit'className='px-4 py-2 bg-[#43484d] text-[#ffa62e] hover:text-[#CA3433]'>Submit</button>
        </div>
      </form>
    </div>
    <div className='mt-auto'>
    <Carousel />
    </div>
   
    </div>
  );
};

export default Login;
