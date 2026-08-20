import { UserProfile } from "../../amplify/data/models/system";

export interface Message {
    id: string;
    text: string;
}

export interface UserProfile {
    id: string;
    displayName: string;
    weekDayStart: number;
}

export interface UserSummary {
    id: string;
    email: string;
    admin: boolean;
    enabled: boolean;
    status: string;
}

export interface UserDetail extends UserSummary {
    displayName: string;
    weekDayStart: number;
}

export type SystemEvent =
    | { type: 'FIND_MENUS_DUE', context: { menuCount: number } }
    | { type: 'MENU_GENERATION_FAILURE', context: { message: string } }
    | { type: 'GENERATE_MENU_BATCH', context: { duration: number, successes: number, failures: number } }
