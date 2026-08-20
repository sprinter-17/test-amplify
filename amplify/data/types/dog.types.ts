import { IngredientSet } from './ingredient.types';
import { OfferHistory } from './menu.types';
import { HealthCondition } from './health.types';
import { DateOnly } from './date-only.types';

export const GENDERS = ['male', 'female'] as const;
export type Gender = typeof GENDERS[number];

export const ACTIVITY_LEVELS = ['sedentary', 'average', 'high', 'performance'] as const;
export type ActivityLevelName = typeof ACTIVITY_LEVELS[number];

// these must be in correct age order as this is used to determine 
// if breed health conditions with onset lifestage apply
export const LIFESTAGES = ['puppy', 'adolescent', 'adult', 'mature', 'senior'] as const;
export type LifestageName = typeof LIFESTAGES[number];

export const BREEDING_STATUSES = ['desexed', 'entire', 'pregnant', 'lactating'] as const;
export type BreedingStatusName = typeof BREEDING_STATUSES[number];

export const BKSU_REDUCTION_OPTIONS = ['normal', 'reduce', 'exclude'] as const;
export type BKSU_Reduction = typeof BKSU_REDUCTION_OPTIONS[number];

export interface DogCreationContext {
    breeds: Record<string,DogBreed>;
    healthConditions: Record<string,HealthCondition>;
    ingredientSets: Record<string,IngredientSet>;
}

// health conditions associated with a breed have an age at which they apply to all dogs of that breed
// this is set to 0 for conditions that apply from birth
export interface DogBreedHealthCondition {
    onset?: number | LifestageName,
    healthCondition: HealthCondition
}

export interface JsonDogBreed {
    id: string;
    group: string;
    matureFromAge: number;
    seniorFromAge: number;
    healthConditions?: string[];
}

export interface JsonDogBreedGroup {
    id: string;
    label: string;
    healthConditions?: string[],
    notes?: string,
}

export interface DogBreed {
    id: string,
    group: DogBreedGroup,
    matureFromAge: number,
    seniorFromAge: number,
    healthConditions?: DogBreedHealthCondition[],
}

export interface DogBreedGroup {
    id: string,
    label: string,
    healthConditions?: DogBreedHealthCondition[],
    notes?: string,
}

export interface Dog {
    id?: string,
    saved: boolean,
    owner: string,
    name: string,
    gender: Gender,
    dateOfBirth: DateOnly,
    lifestage: LifestageName,
    breed: DogBreed,
    secondaryBreed?: DogBreed,
    equalBreed?: DogBreed,
    weight: number,
    activityLevel: ActivityLevelName,
    desiredWeight?: number,
    breedingStatus: BreedingStatusName,
    healthConcerns: HealthCondition[],
    bksuReduction: BKSU_Reduction,
    includeBones: boolean,
    foodExclusions: IngredientSet[],
    mealHistory?: OfferHistory,
    firstMenuDate?: DateOnly,
}

export interface LifestageRule {
    name: LifestageName,
    fromAge: number,
}

export interface ActivityLevel {
    name: ActivityLevelName;
    label: string;
}

export interface DesiredWeightChange {
    name: string;
    label: string;
    feedFactor: number;
}

