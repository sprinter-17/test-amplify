import { Ingredient, IngredientGroup } from "./ingredient.types";

export interface ExplanationContext {
    group?: IngredientGroup;
    ingredient?: Ingredient;
}

export interface Explanation {
    enabled: boolean;
    messages: string[];
    context: ExplanationContext;
}

