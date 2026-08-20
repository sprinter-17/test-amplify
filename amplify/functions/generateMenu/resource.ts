import { defineFunction } from '@aws-amplify/backend';

export const generateMenu = defineFunction({
  name: 'generateMenu',
  entry: './handler.ts',
  timeoutSeconds: 30,
});