import axios from 'axios';


const BASE_URL = 'http://localhost:8080/api/v1';
const authToken = localStorage.getItem("authToken");

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  },
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const activateAccount = async (token) => {
  try {
    const response = await apiClient.get('/auth/activate-account', {
      params: { token },
    });
    return response.data;
  } catch (error) {
    console.error('Activation error:', error);
    throw error;
  }
};

export const transferToBank = async (transferRequest) => {
  try {
    return await apiClient.post('/account/transfer_to_bank', transferRequest);
  } catch (error) {
    console.error('Activation error:', error);
    throw error;
  }
}

export const transferToMonieFlex = async (transferRequest) => {
  try {
    return await apiClient.post('/account/transfer_to_monieflex', transferRequest);
  } catch (error) {
    console.error('Activation error:', error);
    throw error;
  }
}

export const verifyPin = async (pin) => {
  try {
    return await apiClient.get('/account/verify-pin?pin='+pin);
  } catch (error) {
    console.error('Activation error:', error);
    throw error;
  }
}

export default {
  login,
  register,
  activateAccount,
};
