import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { hello } from './functions/hello/resource';
import { generateMenu } from './functions/generateMenu/resource';

defineBackend({
  auth,
  data,
  hello,
  generateMenu,
});
