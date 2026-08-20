import { a } from "@aws-amplify/backend";

export const HealthCondition = a.model({
    id: a.string().required(),
    label: a.string().required(),
    allowSelect: a.boolean(),
    equivalentImplications: a.string(),
  });

export const  HealthImplication = a.model({
    conditions: a.string().required().array().required(),
    rule: a.string(),
    ingredients: a.string().required().array(),
    message: a.string(),
  });