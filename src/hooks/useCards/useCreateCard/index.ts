import { api } from 'api/client';
import { useMutation } from 'react-query';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

export async function createCard(card: any) {
  try {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const response = await api.post(
      `/api/accounts/${userData.account_id}/cards`,
      card,
      {
        headers: { Authorization: userData.token }
      }
    );
    return response;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useCreateCard() {
  return useMutation(createCard);
}
