import { ApiControllerCRUD } from '@lib/api/bases';
import { Account } from '@lib/api/models';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';

export class AccountController extends ApiControllerCRUD<
  Account,
  {},
  Account,
  unknown,
  unknown
> {
  constructor(client: AxiosInstance, lockerModel: LockerModel) {
    super(client, lockerModel, 'Account');
  }

  async getMe(
    handleSuccess?: (model: Account) => void,
    handleError?: () => void
  ) {
    return await this.process(this.get('me'), handleSuccess, handleError);
  }

  async getGetById(
    id: number,
    handleSuccess: (model: Account) => void,
    handleError: () => void
  ) {
    return await this.process(
      this.get(`get/${id}`),
      handleSuccess,
      handleError
    );
  }
}
