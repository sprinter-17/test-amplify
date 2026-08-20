import { ActivityLevelName, BreedingStatusName, LifestageName } from "./dog.types";
import { Explanation } from "./explanation.types";
import { CategoryName } from "./menu.types";

export type Allocation = Record<CategoryName, number>;

export interface FoodAllocationGroup {
    id: string,
    allocation: Allocation
};

export interface BaseDailyFeedRate {
    lifestage: LifestageName,
    ageInMonths?: number,
    activityLevel?: ActivityLevelName,
    dailyFoodAllowanceFactor: number,
};


export interface BreedingStatusFeedFactor {
    breedingStatus: BreedingStatusName,
    factor: number,
};


export interface FeedRules {
    baseRules: BaseDailyFeedRate[],
    breedingStatusRules: BreedingStatusFeedFactor[],
    foodAllocationRules: FoodAllocationGroup[]
}

// remainder is what it left over for a category when a scale-allocation rule is applied
// it's used to generate meaningful menu notes about supplementary ingredients
// todo: better would be to reallocate to a new supplementary category inside the same allocation object
// that way the reference data could specify ingredients for the supplementary category
// and the menu could include it as a standard row rather than using notes
export interface FoodAllocation {
    allocation: Allocation,
    remainder?: Allocation,
    explanation: Explanation,
}

