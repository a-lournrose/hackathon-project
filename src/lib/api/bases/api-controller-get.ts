import { ApiControllerBase } from '@/lib/api/bases/api-controller-base';
import {
  getOptions,
  IApiControllerGet,
} from '@lib/api/interfaces/i-api-controller-get';
import { AxiosInstance } from 'axios';
import { Autocomplete, LockerModel, PagingModel } from '@/lib/api/types';

export abstract class ApiControllerGet<
    T,
    TFilter,
    TCreate = null,
    TUpdate = null,
    TUpdatePartially = null
  >
  extends ApiControllerBase<TCreate, TUpdate, TUpdatePartially>
  implements IApiControllerGet<T, TFilter>
{
  protected constructor(
    client: AxiosInstance,
    locker: LockerModel,
    controllerName: string
  ) {
    super(client, locker, controllerName);
  }

  public async getById(
    id: number,
    onSuccess?: (model: T) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<T> {
    return await this.process<T>(
      this.get(id.toString()),
      onSuccess,
      onError,
      exclusive
    );
  }

  public async getAll(
    opts?: getOptions<T, TFilter>,
    onSuccess?: (models: T[]) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<T[]> {
    return await this.process<T[]>(this.get(''), onSuccess, onError, exclusive);
  }
}
