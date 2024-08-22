export interface ApiResponse {
  get: string;
  parameters: any;
  errors: any[];
  results: number;
  paging: Paging;
}

interface Paging {
  current: number;
  total: number;
}
