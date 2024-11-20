import { useState } from 'react';
import { FormFooter } from '.';

export const AuthForm = ({ title, loading, onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const isSignup = title === 'Registrieren';

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Geben Sie eine gültige E-Mail ein');
      return;
    }

    if (password.length < 5) {
      setError('Das Passwort muss mindestens 5 Zeichen lang sein');
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError('Passwörter stimmen nicht überein');
      return;
    }

    if (isSignup && !isChecked) {
      setError(
        'Um fortzufahren, müssen Sie die Datenschutzrichtlinie akzeptieren'
      );
      return;
    }

    onSubmit && onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl text-white font-bold mb-8 text-center'>
        {title}
      </h2>

      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <div className='mb-4'>
        <label
          className='block text-white text-sm font-bold mb-2'
          htmlFor='email'
        >
          E-Mail
        </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />
      </div>

      <div className='mb-4'>
        <label
          className='block text-white text-sm font-bold mb-2'
          htmlFor='password'
        >
          Passwort
        </label>
        <input
          id='password'
          type='password'
          autoComplete='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />
      </div>

      {isSignup && (
        <>
          <div className='mb-4'>
            <label
              className='block text-white text-sm font-bold mb-2'
              htmlFor='confirm-password'
            >
              Passwort bestätigen
            </label>
            <input
              id='confirm-password'
              type='password'
              autoComplete='confirm-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>
          <div>
            <input
              id='privacy-policy-accept'
              type='checkbox'
              checked={isChecked}
              onChange={() => setChecked(!isChecked)}
              className='accent-purple-500 cursor-pointer'
            />
            <label className='text-white text-xs ml-2'>
              Ich bestätige, dass ich die{' '}
              <a
                href='/privacy'
                className='text-purple-300 hover:text-purple-500 underline'
              >
                Datenschutzrichtlinie
              </a>{' '}
              gelesen und akzeptiert habe.
            </label>
          </div>
        </>
      )}
      <FormFooter loading={loading} onCancel={onCancel} />
    </form>
  );
};
