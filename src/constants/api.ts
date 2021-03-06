import IS_DEV from 'constants/global';

let baseUrl = IS_DEV ? 'http://api.aviationstack.com/v1' : 'http://api.aviationstack.com/v1';
let apiKey = '1e6f918b78f6a58ab3f51ec58bacf60a';

export {
  baseUrl,
  apiKey,
};
