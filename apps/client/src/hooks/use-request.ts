import { useState } from 'react';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState([]);

  const doRequest = async () => {
    setErrors([]);
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch((error) => {
      console.log(error);
      return null;
    });

    if (response) {
      const data = await response.json();
      console.log(data);
      if (response.ok && onSuccess) {
        onSuccess(data);
        return data;
      } else {
        setErrors(data.errors);
      }
    }
  };

  return { doRequest, errors };
}
