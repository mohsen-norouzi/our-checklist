export type Response<T> = {
    data: T;
    meta: {
        pagination: Pagination
    }
};

type Pagination = {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}