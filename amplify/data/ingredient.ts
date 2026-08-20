import { a } from "@aws-amplify/backend";

export const IngredientGroup = a.model({
  id: a.string().required(),
  category: a.string().required(),
  label: a.string().required(),
  rules: a.string(),
});

export const Ingredient = a.model({
  id: a.string().required(),
  group: a.string().required(),
  label: a.string().required(),
  conditionInclusions: a.string().required().array(),
  conditionExclusions: a.string().required().array(),
  rules: a.string(),
  unit: a.string(),
  weightPerUnit: a.float(),
  notes: a.string(),
  shoppingListGroup: a.string(),
});

export const IngredientSet = a.model({
  id: a.string().required(),
  label: a.string().required(),
  allowExclusion: a.boolean().required(),
  ingredients: a.string().required().array().required(),
});