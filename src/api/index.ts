import axios, { AxiosError } from 'axios';
import { logoutUser } from 'hooks/useUser/useLoginUser';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
const baseURL = 'https://digitalmoney.ctd.academy';

export function setupApiClient(
  ctx: GetServerSidePropsContext | undefined = undefined
) {
  const api = axios.create({
    baseURL: baseURL
  });
  const { '@digitalmoney:token': token } = parseCookies(ctx);
  api.defaults.headers.common.Authorization = token;

  api.interceptors.request.use(function (config) {
    api.defaults.headers.common.Authorization = token;

    if (config.method === 'patch') {
      api.defaults.headers.common.Accept = 'application/json';
      api.defaults.headers.common['Content-Type'] = 'application/json';
    }

    return config;
  });

  api.interceptors.response.use(
    response => response,
    function (error: AxiosError) {
      if (error.status === 401) {
        // split the token into header, payload, and signature
        const [header, payload, signature] = token.split('.');
        const decodedPayload = JSON.parse(atob(payload));
        const expirationTime = decodedPayload.exp;
        const expirationDate = new Date(expirationTime * 1000);
        console.log(expirationDate);
        if (expirationDate < new Date()) {
          logoutUser();
          return Promise.reject(error);
        } else {
          return Promise.reject(error);
        }
      }
    }
  );
  return api;
}
