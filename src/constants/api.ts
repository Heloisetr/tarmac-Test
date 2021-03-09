import IS_DEV from 'constants/global';

let baseUrl = IS_DEV ? 'http://api.aviationstack.com/v1' : 'http://api.aviationstack.com/v1';
let apiKey = '6869758e8f5e5414eacd3eb02288c4a8';

export {
  baseUrl,
  apiKey,
};
