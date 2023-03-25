import { api } from 'api/client';
import { useQuery } from 'react-query';
import { AcctActivity } from './types';
import { useGetAccount } from '../useGetAcctData';
import { useEffect, useState } from 'react';

const QUERY_KEY_GET_ACCOUNT_ACTIVITY = 'get-account-activity';

export async function getAcctActivity(accountId: number | undefined) {
  if (!accountId) return;
  try {
    const { data } = await api.get(`/api/accounts/${accountId}/activity`, {
      params: { account_id: accountId }
    });

    return data as AcctActivity[];
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      Promise.reject(err);
    }
  }
}

export function useGetAcctActivity(userId: number | undefined) {
  const { data: account } = useGetAccount(userId);

  return useQuery([QUERY_KEY_GET_ACCOUNT_ACTIVITY, account?.id], () =>
    getAcctActivity(account?.id)
  );
}
/* const useGetAcctActivity = (
  userId: number | undefined,
  filter: string = ''
) => {
  const [data, setData] = useState<AcctActivity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: account } = useGetAccount(userId);

  const getAcctActivity = async (
    accountId: number | undefined,
    filter: string
  ) => {
    if (!accountId) return;
    try {
      setIsLoading(true);
      const { data } = await api.get(`/api/accounts/${accountId}/activity`, {
        params: { account_id: accountId }
      });

      const filteredData = data.filter(
        (item: AcctActivity) => item.type === filter
      );

      setData(filteredData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAcctActivity(account?.id, filter);
  }, [account?.id, filter]);

  return { data, isLoading };
};

export default useGetAcctActivity;
 */
