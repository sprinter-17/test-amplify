import { a } from '@aws-amplify/backend';
import { generateMenu } from '../functions/generateMenu/resource';

export default a.mutation()
    .arguments({
        id: a.string().required(),
        start: a.date().required(),
    })
    .returns(a.string())
    .handler(a.handler.function(generateMenu))
    .authorization(allow => [allow.authenticated()]);