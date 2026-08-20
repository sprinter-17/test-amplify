import { DogBreed } from "./dog.types";
import { Explanation } from "./explanation.types";
import { FeedRules } from "./menu-rule.types";
import { Ingredient, MenuIngredients } from "./ingredient.types";
import { HealthCondition } from "./health.types";
import { DateOnly } from "./date-only.types";

export const CATEGORY_NAMES = ["bones", "protein", "offal", "veg", "fruit", "booster"];
export type CategoryName = typeof CATEGORY_NAMES[number];

export type RandomGenerator = (max: number) => number;

export type OfferDates = Record<string, DateOnly>

export interface OfferHistory {
    firstGroupOffering: OfferDates,
    mostRecentGroupOffering: OfferDates,
    mostRecentIngredientOffering: OfferDates
}

export interface MenuGenerationExplanationFilter {
    day: DateOnly,
    category: CategoryName
}

export interface MenuGenerationContext {
    feedRules: FeedRules;
    breeds: DogBreed[];
    healthConditions: HealthCondition[];
    ingredients: MenuIngredients;
    maxIngredientsPerGroup: Record<CategoryName,number>,
    dayCount: number;
    explanationFilter?: MenuGenerationExplanationFilter;
};

export type MenuCategoryMap = Record<CategoryName, MenuCategory>;

export type Menu = {
    categories: MenuCategoryMap,
    explanation: Explanation,
    remainder?: Record<CategoryName, number>,
    notes?: string[],
    notesData?: Record<string,string>,
    errors?: string[]
}

export interface MenuCategory {
    weight: number,
    dailyOptions: Record<DateOnly, MenuChoice[]>
}

export interface MenuChoice {
    ingredient: Ingredient,
    amount: number,
    notes?: string
}

// in saved format ingredients are stored as their id
export interface SavedMenuChoice {
    ingredient: string,
    amount: number,
    note?: string,
}

export type SavedMenuContent = Record<DateOnly, SavedMenuChoice[][]>;

// in saved format, a menu maps dates to a list (category) of lists (choices)
export interface SavedMenu {
    contents: SavedMenuContent,
    notes: string[],
    notesData?: Record<string,string>,
    confirmed: boolean,
}

