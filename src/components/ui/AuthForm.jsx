import { useState } from 'react';

export const AuthForm = ({ title, onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
          required
        />
      </div>

      {isSignup && (
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        </div>
      )}

      <div className='flex justify-between mt-12'>
        <button type='submit' className='btn-primary'>
          Einreichen
        </button>
        <button
          type='button'
          className='py-3 px-9 bg-white font-bold rounded-full shadow-xl hover:bg-gray-300 hover:shadow-none focus:outline-none transition-all'
          onClick={onCancel}
        >
          Abbrechen
        </button>
      </div>
    </form>
  );
};
