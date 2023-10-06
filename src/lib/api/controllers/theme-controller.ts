import { ApiControllerCRUD } from '@lib/api/bases';
import {
  CreateThemeRequestDto,
  Theme,
  UpdateThemeRequestDto,
} from '@lib/api/models';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';

export class ThemeController extends ApiControllerCRUD<
  Theme,
  unknown,
  CreateThemeRequestDto,
  UpdateThemeRequestDto,
  unknown
> {
  constructor(client: AxiosInstance, lockerModel: LockerModel) {
    super(client, lockerModel, 'Theme');
  }
}
