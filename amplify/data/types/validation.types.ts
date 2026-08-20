import { Row } from "./structure.types";

export type RefData = Record<string, Row[]>;
export type CheckLevel = 'information' | 'warning' | 'error' | 'fatal';

export interface RowCheck {
    test: (row: Row) => boolean;
    level?: CheckLevel;
    message: string;
}

export type FieldData = string | number | boolean;

export interface CustomCheck {
    custom: ((val: FieldData, data?: RefData) => string | undefined);
}

export interface ReferenceCheck {
    reference: string;
}

export interface ValueCheck {
    test: (val: FieldData, data?: RefData) => boolean;
    level?: CheckLevel;
    message: string;
}

export type FieldCheck = CustomCheck | ReferenceCheck | ValueCheck;

export interface ValidationMessage {
    level: CheckLevel,
    message: string,
}

