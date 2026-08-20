import { FieldCheck, RowCheck } from "./validation.types";

export type Row = Record<string, string | string[] | boolean>;

export interface FieldDef {
    column: string;
    optional?: boolean;
    default?: string | string[] | boolean;
    unique?: boolean;
    dbOnly?: boolean;
    type?: 'string' | 'integer' | 'boolean' | 'array';
    transform?: (val:string) => string;
    check?: FieldCheck[];
}

export interface SheetDef {
    sheet: string;                           // Excel sheet name
    rowCheck?: RowCheck[];
    keyColumn?: string;                      // field name (not Excel col) for map key
    fields: Record<string, FieldDef>;
}