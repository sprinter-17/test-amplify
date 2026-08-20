import { a } from '@aws-amplify/backend';

export const Message = a.model({
    id: a.string().required(),
    text: a.string().required(),
});

export const UserProfile = a.model({
    id: a.string().required(),
    displayName: a.string().required(),
    weekDayStart: a.integer(),
})
    .authorization(allow => [allow.authenticated()]);


export const SystemConfig = a.model({
    key: a.id().required(),
    value: a.string().required(),
})
    .identifier(['key'])
    .authorization(allow => [allow.authenticated()]);

export const SystemEvent = a.model({
    id: a.id().required(),
    partition: a.string().required(), // required only to allow sorting by occurredAt
    occurredAt: a.datetime().required(),
    eventType: a.string().required(),
    context: a.string()
})
    .secondaryIndexes(index => [index('partition').sortKeys(['occurredAt'])])
    .authorization(allow => [allow.group('Admin')]);