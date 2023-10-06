import { ApiControllerGet } from '@/lib/api/bases/api-controller-get';
import { IApiControllerCrud } from '@/lib/api/interfaces';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@/lib/api/types';

export abstract class ApiControllerCRUD<
    T extends Object,
    TFilter extends Object,
    TCreate extends Object,
    TUpdate extends Object,
    TUpdatePartially extends Object
  >
  extends ApiControllerGet<T, TFilter, TCreate, TUpdate, TUpdatePartially>
  implements IApiControllerCrud<T, TFilter, TCreate, TUpdate, TUpdatePartially>
{
  protected constructor(
    client: AxiosInstance,
    locker: LockerModel,
    controllerName: string
  ) {
    super(client, locker, controllerName);
  }

  async create(
    model: TCreate,
    onSuccess?: (model: T) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<T> {
    return await this.process<T>(
      this.post('', { data: model }),
      onSuccess,
      onError,
      exclusive
    );
  }

  async delete(
    id: number,
    onSuccess?: (result: boolean) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<boolean> {
    return await this.process<boolean>(
      this.remove<boolean>(id.toString()),
      onSuccess,
      onError,
      exclusive
    );
  }

  async update(
    id: number,
    model: TUpdate,
    onSuccess?: (model: T) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<T> {
    return await this.process(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.put<T>(id.toString(), { data: model }),
      onSuccess,
      onError,
      exclusive
    );
  }

  async updatePartially(
    id: number,
    model: TUpdatePartially,
    onSuccess?: (model: T) => void,
    onError?: (error: unknown) => void,
    exclusive?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): Promise<T> {
    return await this.process(
      this.patch<T>(id.toString(), { data: model }),
      onSuccess,
      onError,
      exclusive
    );
  }
}
