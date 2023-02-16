import { api } from 'api/client';
import { useMutation } from 'react-query';
import { LoginPayload, LoginResponse } from './types';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

export async function loginUser(user: Omit<LoginPayload, 'login'>) {
  if (!user || Object.keys(user).length === 0) {
    return Promise.reject(new Error('Invalid user object'));
  }
  try {
    const { data } = await api.post<LoginResponse>('/api/login', user);
    return data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useLoginUser() {
  return useMutation(loginUser);
}
