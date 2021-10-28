import axios from 'axios';
import { FC, useCallback, useState } from 'react';

const moviesAPI = axios.create({});

export interface ErrorsResponse {
  [key: string]: Array<string>;
}

export function useAsync<T>(page: number): {
  status: string;
  isLoading: boolean;
  isError: boolean;
  isFulfilled: boolean;
  errors: ErrorsResponse;
  data: T;
  run: (promise: Promise<T>) => Promise<T>;

  reset: () => void;
} {
  const [status, setState] = useState('idle');
  const [data, setData] = useState({} as T);
  const [errors, setErrors] = useState({});

  const reset = useCallback(() => {
    setState('idle');
    setData({} as T);
    setErrors({});
  }, []);

  const run = useCallback(
    (promise: Promise<T>) => {
      reset();
      setState('pending');

      return promise
        .then((res) => {
          setData(res);
          setState('fulfilled');

          return res;
        })
        .catch((err) => {
          const customErrors = err?.response?.data?.errors;

          setState('rejected');
          setErrors(customErrors);

          return customErrors;
        });
    },
    [page]
  );
  return {
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isFulfilled: status === 'fulfilled',
    status,
    errors,
    data,
    run,
    reset,
  };
}
