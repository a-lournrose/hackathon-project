import { ApiControllerBase } from '@lib/api/bases';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';
import { RegistrationRequestDto } from '@lib/api/models';
import { RegistrationResponseDto } from '@lib/api/types/registration-response-dto';

export class RegistrationController extends ApiControllerBase {
  constructor(client: AxiosInstance, lockerModel: LockerModel) {
    super(client, lockerModel, 'Registration');
  }

  async registration(
    dto: RegistrationRequestDto,
    handleSuccess: (model: RegistrationResponseDto) => void,
    handleError: () => void
  ) {
    return await this.process<RegistrationResponseDto>(
      this.post('', { data: dto }),
      handleSuccess,
      handleError
    );
  }
}
