import { HealthCondition } from "./health.types";
import { IngredientRule } from "./ingredient-rules.types";
import { CategoryName } from "./menu.types";

export interface IngredientGroup {
    id: string,
    category: CategoryName,
    label: string,
    rules: IngredientRule[],
    rulesCode?: string,
}

export interface Ingredient {
    id: string,
    group: IngredientGroup,
    label: string,
    conditionInclusions: HealthCondition[],
    conditionExclusions: HealthCondition[],
    rules: IngredientRule[],
    rulesCode?: string,
    unit?: Unit,
    notes?: string,
    shoppingListGroup?: string,
}

export type IngredientLabel = Omit<Ingredient, 'group' | 'conditionInclusions' 
| 'conditionExclusions' | 'rules' | 'rulesCode' | 'notes'>;

export interface JsonIngredient {
    id: string,
    group: string,
    label: string,
    shoppingListGroup?: string,
    weightPerUnit?: number,
    unit?: string,
}

export interface Unit {
    label?: string,
    weightPerUnit: number
}

export interface IngredientSet {
    id: string,
    label: string,
    allowExclusion: boolean,
    ingredients: Ingredient[]
}

export interface MenuIngredients {
    categoryRules: IngredientRule[],
    groups: IngredientGroup[],
    ingredients: Ingredient[],
    sets: IngredientSet[],
    messages: MenuNote[],
    transitionPeriod: TransitionPeriod[],
    errors?: string[]
}

export interface MenuNote {
    conditions: HealthCondition[],
    ingredients: Ingredient[],
    message: string,
}

export interface TransitionPeriod {
    fromDay: number,
    allocation: number,
}
export interface ShoppingListGroup {
    id: string;
    label: string;
    order: number;
}




