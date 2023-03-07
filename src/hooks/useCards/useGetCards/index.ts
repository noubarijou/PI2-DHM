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

export async function getCardsList() {
  try {
    const { userData: userDataFromCookies } = parseCookies();

    const userData = JSON.parse(userDataFromCookies);
    const response = await api.get(
      `/api/accounts/${userData.account_id}/cards`,
      {
        headers: { Authorization: userData.token }
      }
    );
    return response.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useGetCards() {
  return useMutation(getCardsList);
}
