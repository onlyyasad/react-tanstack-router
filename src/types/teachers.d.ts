export interface ITeacher {
    id: number;
    name: string;
    email: string;
    phone: string;
    age: number;
    salary: string;
    expertise: string;
    location: string;
}

export interface IPagination {
    current_page: number;
    per_page: number;
    to: number;
    total: number;
    last_page: number;
}


export interface ITeacherResponse {
    data: ITeacher[];
    pagination: IPagination;
}


export type PaginationParams = { page: number; per_page: number };
export type SortParams = { sortBy: `${string}.${"asc" | "desc"}` };
export type Filters<T> = Partial<T & PaginationParams & SortParams>;
