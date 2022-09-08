export * from './constants';
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
