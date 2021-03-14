import { getListUrl, showUrl, storeUrl, updateUrl } from './url';

export const getListEmployeeApi = () => {
  return fetch(getListUrl)
    .then((response) => response.json())
    .then((data) => data);
};

export const showApi = (id) => {
  let url = showUrl.replace('_ID_', id);

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export const storeApi = (data) => {
  return fetch(storeUrl, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log('data', data));
};

export const updateApi = (data) => {
  let url = updateUrl.replace('_ID_', data.id);

  return fetch(url, {
    method: 'put',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log('data', data));
};
