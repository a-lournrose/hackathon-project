import {
  PagingModel,
  PagingOptions,
  FilterOption,
  Autocomplete,
} from '@/lib/api/types';

export type getOptions<T, TFilter> = {
  paging?: PagingOptions<T>;
  filter?: FilterOption<TFilter>[];
};

export interface IApiControllerGet<T, TFilter> {
  getAll(
    opts?: getOptions<T, TFilter>,
    onSuccess?: (model: T[]) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
  ): Promise<T[]>;
  getById(
    id: number,
    onSuccess?: (model: T) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
  ): Promise<T>;

  toString(): string;
}
