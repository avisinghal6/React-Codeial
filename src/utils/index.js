export * from './constants';
export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    console.error('can not store in LS');
  }

  const valueToStore = typeof value != 'string' ? JSON.stringify(value) : value;
  localStorage.setItem(key, valueToStore);
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    console.error('can not get from LS');
  }

  localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    console.error('can not remove from LS');
  }

  localStorage.removeItem(key);
};
//{username:'avi',password:'123'}
export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'username' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); //avi123 => avi%20123

    formBody.push(encodedKey + '=' + encodedValue);

    return formBody.join('&'); //username=avi&password=123
  }
};
