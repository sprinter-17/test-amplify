export interface HealthCondition {
    id: string,
    label: string,
    allowSelect: boolean,
    equivalentImplication?: string,
}

export interface HealthImplication {
    conditions: string[],
    rule?: string,
    ingredients?: string[],
    message?: string
}
