'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useRequest from '../../hooks/use-request';

export default function SignUpForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => router.push('/')
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form
      onSubmit={onSubmit}
      className='mt-8 max-w-md'
    >
      <div className='grid grid-cols-1 gap-6'>
        <label
          htmlFor='email-input'
          className='block'
        >
          <span className='text-gray-700'>Email Address</span>
          <input
            id='email-input'
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='john.smith@someplace.com'
            className='form-control'
          />
        </label>
        <label
          htmlFor='password-input'
          className='block'
        >
          <span className='text-gray-700'>Password</span>
          <input
            id='password-input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </label>
        <div className='block'>
          <button
            className='btn-white'
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </div>
      {errors.length > 0 && (
        <div className='alert'>
          <h4>Ooops....</h4>
          <ul className='my-0'>
            {errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
