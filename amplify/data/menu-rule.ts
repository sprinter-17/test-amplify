import { a } from "@aws-amplify/backend";

export const FoodAllocationGroup = a.model({
    id: a.string().required(),
    bones: a.float().required(),
    protein: a.float().required(),
    offal: a.float().required(),
    veg: a.float().required(),
    fruit: a.float().required(),
    booster: a.float().required(),
});

export const BaseDailyFeedRate = a.model({
    lifestage: a.string().required(),
    ageInMonths: a.integer(),
    activityLevel: a.string(),
    dailyFoodAllowanceFactor: a.float().required(),
});

export const BreedingStatusFeedFactor = a.model({
    breedingStatus: a.string().required(),
    factor: a.float().required(),
});

export const TransitionPeriod = a.model({
    fromDay: a.integer().required(),
    allocation: a.float().required(),
});