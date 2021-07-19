import axios from 'axios';

const AUTH_API_URL = '/api/auth';

const login = async (email: string, password: string) => {
  const { data } = await axios.post(AUTH_API_URL + '/login', {
    email,
    password,
  });

  console.log('Successfully logged in!');

  return data;
};

const AuthService = {
  login,
};

export default AuthService;
