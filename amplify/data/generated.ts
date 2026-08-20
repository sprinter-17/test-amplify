import { a } from '@aws-amplify/backend';

export const GeneratedMenu = a.model({
    dog: a.string().required(),
    start: a.string().required(),
    referenceDataVersion: a.string().required(),
    menu: a.string().required(),
})
    .identifier(['dog', 'start'])
    .authorization((allow) => [allow.authenticated()]);
