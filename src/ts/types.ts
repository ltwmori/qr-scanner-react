export interface IData {
  name: string;
  updated_at: Date;
  count: number;
  hash: string;
}

export interface IResponseType {
  status: boolean;
  data: IData;
  errors: Array<string>;
}
