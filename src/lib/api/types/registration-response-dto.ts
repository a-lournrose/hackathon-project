import { Role } from '@lib/api/models';

export interface RegistrationResponseDto {
  account: {
    id: number;
    username: string;
    userInfo: {
      id?: number;
      firstName?: string | null;
      secondName?: string | null;
      thirdName?: string | null;
      role?: Role;
    };
  };
  token: string;
}
