interface ListResponse<T> {
  data: T[];
  total: number;
}

export default ListResponse;