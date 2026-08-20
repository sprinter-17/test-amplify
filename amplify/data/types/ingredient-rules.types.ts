import { DateOnly } from "./date-only.types";
import { Dog } from "./dog.types";
import { Ingredient, IngredientGroup } from "./ingredient.types";

export type IngredientRuleContext = {
    dog: Dog, 
    date: DateOnly, 
    ingredientGroup?: IngredientGroup
    ingredient?: Ingredient,
};

export type IngredientPredicate = (arg: IngredientRuleContext) => boolean;

export type QuantityGenerationRuleContext = {
    dog: Dog,
    edibleWeight: number,
    ingredient: Ingredient
}

export type QuantityGenerator = (arg: QuantityGenerationRuleContext) => number;

export type FrequencyGenerationRuleContext = {
    dog: Dog
}

export type FrequencyGenerator = (arg: FrequencyGenerationRuleContext) => number;

export type MonthRange = {
    from: number,
    to: number
}

export const SEASONS: Record<string,MonthRange> = {
    summer: {from: 12, to: 2}, 
    autumn: {from: 3, to: 5},
    winter: {from: 6, to: 8},
    spring: {from: 9, to: 11},
};

export type IngredientRule =
    | { type: 'QUANTITY', generator: QuantityGenerator }
    | { type: 'ACCLIMITISATION', rate: number }
    | { type: 'OFFER_EVERY', rate: number }
    | { type: 'FREQUENCY', generator: FrequencyGenerator }
    | { type: 'PREDICATE', message: string, test: IngredientPredicate}
    | { type: 'HEALTH_IMPLICATION', condition: string, consequence: IngredientRule}
    | { type: 'SCALE_ALLOCATION', category: string, scale: number}
    | { type: 'BKSU_REDUCTION' }
    ;

export interface IngredientRuleParseResult {
    rules: IngredientRule[],
    errors: string[]
}

export interface HealthConditionRuleParseResult {
    rules: {
        ingredients: string[],
        rule: IngredientRule
    }[],
    errors: string[],
}