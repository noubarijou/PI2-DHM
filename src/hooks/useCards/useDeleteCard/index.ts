import { api } from 'api/client';
import { parseCookies } from 'nookies';
import { useMutation } from 'react-query';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

export async function deleteCard(cardNumber: any) {
  try {
    const { userData: userDataFromCookies } = parseCookies();

    const userData = JSON.parse(userDataFromCookies);
    const response = await api.delete(
      `/api/accounts/${userData.account_id}/cards/${cardNumber}`,
      {
        headers: { Authorization: userData.token }
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useDeleteCard() {
  return useMutation(deleteCard);
}
