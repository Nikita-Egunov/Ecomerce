import React, { useState } from 'react';
import '../css/Main.css'

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistering) {
      // Логика регистрации
      console.log('Registering with:', email, password);
    } else {
      // Логика входа
      console.log('Logging in with:', email, password);
    }
  };

  return (
    <div>
      <h1>{isRegistering ? 'Регистрация' : 'Вход'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Почта:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isRegistering ? 'Зарегистрироваться' : 'Войти'}</button>
      </form>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'У вас уже есть аккаунт? Войдите в него' : 'У вас нет аккаунта? Создайте его'}
      </button>
    </div>
  );
};

export default LoginPage;