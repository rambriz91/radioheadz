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
      <Link
        to='/signup'
        className='block mb-4 text-4xl text-[#ffa62e] no-underline hover:text-[#CA3433]'
      >
        ← Go to Signup
      </Link>
      <div className='container flex mx-auto my-8 p-4 max-w-md bg-[#43484d] text-[#ffa62e]'>
        {/* side by side containers */}
        <div className='leftSide w-1/2 flex flex-col bg-[#2d3033] p-5'>
          <h2 className='text-4xl font-oleo-script mt-5 '>Login</h2>
          <div className='text-center mb-4'>
            <form onSubmit={handleFormSubmit} className='space-y-4 w-full'>
              <div className='flex-row space-between my-2 w-full'>
                <label htmlFor='email' className='block mb-1'>
                  Email address:
                </label>
                <div className='w-full'>
                  <input
                    placeholder='youremail@test.com'
                    name='email'
                    type='email'
                    id='email'
                    className='w-full px-4 py-2 rounded border border-gray-300'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='flex-row space-between my-2 w-full'>
                <label htmlFor='pwd' className='block mb-1'>
                  Password:
                </label>
                <div className='w-full'>
                  <input
                    placeholder='******'
                    name='password'
                    type='password'
                    id='pwd'
                    className='w-full px-4 py-2 rounded border border-gray-300'
                    onChange={handleChange}
                  />
                </div>
              </div>
              {error ? (
                <div>
                  <p className='error-text'>
                    The provided credentials are incorrect
                  </p>
                </div>
              ) : null}
              <div className='text-center'>
                <button
                  type='submit'
                  className='px-4 py-2 mt-3 bg-[#43484d] text-[#ffa62e] hover:text-[#CA3433]'
                  style={{ borderRadius: '6px' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='rightSide w-1/2'>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Login;
