export interface Profile {
  id: string;
  username: string;
  lastName: string;
  firstName: string;
}

export interface ResponseBody {
  status: number;
  error: string;
  message: string;
}
