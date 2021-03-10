import IS_DEV from 'constants/global';

let baseUrl = IS_DEV ? 'http://api.aviationstack.com/v1' : 'http://api.aviationstack.com/v1';
let apiKey = 'f3af92f9d443841489e10cbc080e001f';

export {
  baseUrl,
  apiKey,
};
