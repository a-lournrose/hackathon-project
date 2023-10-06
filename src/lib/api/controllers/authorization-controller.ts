import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { ApiControllerBase } from '@lib/api/bases';
import { LoginRequestDto } from '@lib/api/models';

export class AuthorizationController extends ApiControllerBase<LoginRequestDto> {
  constructor(client: AxiosInstance, lockerModel: LockerModel) {
    super(client, lockerModel, 'Authorization');
  }

  public async login(
    dto: LoginRequestDto,
    handleSuccess: (model: LoginRequestDto) => void,
    handleError: () => void
  ) {
    return await this.process(this.post('login', { data: dto }));
  }
}
