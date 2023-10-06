import { RequestInit } from 'next/dist/server/web/spec-extension/request';

async function fetchData (url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return { message: 'Error fetching data:' + error.message };
    }
  }
}

const useFetch = async <T> (url: string, options?: RequestInit): Promise<T> => {
  const res = await fetchData(url, options);
  return res;
};

export default useFetch;
