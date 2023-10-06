import { AxiosInstance } from 'axios';
import { LockerModel } from '@/lib/api/types';
import { mutexLocker } from '@/lib/api/plugins/locker';
import { client } from '@/lib/api/plugins/client';
import { AccountController } from '@lib/api/controllers/account-controller';
import { AuthorizationController } from '@lib/api/controllers/authorization-controller';
import { CourseController } from '@lib/api/controllers/course-controller';
import { ThemeController } from '@lib/api/controllers/theme-controller';
import { RegistrationController } from '@lib/api/controllers/registration-controller';

class Api {
  public account: AccountController;
  public auth: AuthorizationController;
  public course: CourseController;
  public theme: ThemeController;
  public registration: RegistrationController;

  constructor(client: AxiosInstance, locker: LockerModel) {
    this.account = new AccountController(client, locker);
    this.auth = new AuthorizationController(client, locker);
    this.course = new CourseController(client, locker);
    this.theme = new ThemeController(client, locker);
    this.registration = new RegistrationController(client, locker);
  }
}
export const api = new Api(client, mutexLocker);
