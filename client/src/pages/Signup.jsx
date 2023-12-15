import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import RadioGuy from '../assets/images/radioguy.png'

const Signup = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='min-h-screen flex'>
      <div className='w-1/2 flex flex-col justify-center items-center bg-[#43484d] text-[#ffa62e]'>
        <Link to='/login' className='block text-4xl text-[#ffa62e] mb-3 mt-[-10] no-underline hover:text-[#CA3433]'>← Go to Login</Link>

        <h2 className='text-4xl font'>Signup</h2>
        <form onSubmit={handleFormSubmit} className='space-y-4'>
          <div className='flex-row space-between my-2'>
            <label htmlFor='firstName' className='block mb-1'>First Name:</label>
            <input
              placeholder='First'
              name='firstName'
              type='firstName'
              id='firstName'
              className='w-full px-4 py-2 rounded border border-gray-300'
              onChange={handleChange}
            />
          </div>
          <div className='flex-row space-between my-2'>
            <label htmlFor='lastName' className='block mb-1'>Last Name:</label>
            <input
              placeholder='Last'
              name='lastName'
              type='lastName'
              id='lastName'
              className='w-full px-4 py-2 rounded border border-gray-300'
              onChange={handleChange}
            />
          </div>
          <div className='flex-row space-between my-2'>
            <label htmlFor='username' className='block mb-1'>Username:</label>
            <input
              placeholder='username'
              name='username'
              type='username'
              id='username'
              className='w-full px-4 py-2 rounded border border-gray-300'
              onChange={handleChange}
            />
          </div>
          <div className='flex-row space-between my-2'>
            <label htmlFor='email' className='block mb-1'>Email:</label>
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
            <label htmlFor='pwd' className='block mb-1'>Password:</label>
            <input
              placeholder='******'
              name='password'
              type='password'
              id='pwd'
              className='w-full px-4 py-2 rounded border border-gray-300'
              onChange={handleChange}
            />
          </div>
          <div className='text-center'>
            <button type='submit' className='px-4 py-2 bg-[#43484d] text-[#ffa62e] hover:text-[#CA3433]'>Submit</button>
          </div>
        </form>
      </div>
      {/* second half of page */}
      <div className='w-1/2 relative' style={{backgroundImage: `url(${RadioGuy})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='absolute inset-0 bg-black bg-opacity-50'>
          
        </div>
      </div>
    </div>


  );
};

export default Signup;
