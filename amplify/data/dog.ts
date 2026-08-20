import { a } from "@aws-amplify/backend";
import { ACTIVITY_LEVELS, BKSU_REDUCTION_OPTIONS, BREEDING_STATUSES, GENDERS, LIFESTAGES }
    from "./types/dog.types";

export const Dog = a.model({
    name: a.string().required(),
    owner: a.string().required(),
    gender: a.enum(GENDERS),
    dateOfBirth: a.date().required(),
    breed: a.string().required(),
    secondaryBreed: a.string(),
    equalBreed: a.string(),
    lifestage: a.enum(LIFESTAGES),
    weight: a.float().required(),
    desiredWeight: a.float(),
    activityLevel: a.enum(ACTIVITY_LEVELS),
    breedingStatus: a.enum(BREEDING_STATUSES),
    healthConcerns: a.string().required().array().required(),
    foodExclusions: a.string().required().array().required(),
    bksuReduction: a.enum(BKSU_REDUCTION_OPTIONS),
    includeBones: a.boolean().required().default(true),
    firstMenuDate: a.date(),
})
    .secondaryIndexes((index) => [index("owner")])
    .authorization((allow) => [
        allow.owner(), 
        allow.group('Admin'),
    ]);

export const DogBreed = a.model({
    id: a.string().required(),
    group: a.string().required(),
    healthConditions: a.string().required().array().required(),
    matureAge: a.integer(),
    seniorAge: a.integer(),
});

export const DogBreedGroup = a.model({
    id: a.string().required(),
    label: a.string().required(),
    healthConditions: a.string().required().array(),
    notes: a.string(),
});

export const Lifestage = a.model({
    id: a.string().required(),
    fromAge: a.integer().required(),
});
