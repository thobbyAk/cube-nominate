export type ObjectLiteral = {
    [key: string]: string;
};

export interface Nominees {
    nominee_id: string,
    first_name: string,
    last_name: string
}

export interface Nominations {
    nomination_id: string
    nominee_id: string
    reason: string
    process: string
    date_submitted: string
    closing_date: string
}

export interface NominationPayload {
    nominee_id: string,
    reason: string,
    process: string,
    nomination_id?: string
}

export interface RegisterPayload {
    email: string,
    password: string,
    name: string
}

export interface LoginPayload {
    email: string,
    password: string,
}