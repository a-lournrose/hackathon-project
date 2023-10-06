import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { ApiControllerBase } from '@lib/api/bases';
import { Account, LoginRequestDto } from '@lib/api/models';
import { LoginResponseDto } from '@lib/api/types/login-response-dto';

export class AuthorizationController extends ApiControllerBase<Account> {
  constructor(client: AxiosInstance, lockerModel: LockerModel) {
    super(client, lockerModel, 'Authorization');
  }

  public async login(
    dto: LoginRequestDto,
    handleSuccess: (model: LoginResponseDto) => void,
    handleError: () => void
  ) {
    return await this.process<LoginResponseDto>(
      this.post('login', { data: dto }),
      handleSuccess,
      handleError
    );
  }
}
