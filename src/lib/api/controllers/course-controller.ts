import { ApiControllerCRUD } from '@lib/api/bases';
import {
  Course,
  CreateCourseRequestDto,
  LoginRequestDto,
  UpdateCourseRequestDto,
} from '@lib/api/models';
import { AxiosInstance } from 'axios';
import { LockerModel } from '@lib/api/types';

export class CourseController extends ApiControllerCRUD<
  Course,
  unknown,
  CreateCourseRequestDto,
  UpdateCourseRequestDto,
  unknown
> {
  constructor(client: AxiosInstance, lockerModel: LockerModel) {
    super(client, lockerModel, 'Course');
  }

  async getGetAll(
    handleSuccess?: (model: Course[]) => void,
    handleError?: () => void
  ) {
    return await this.process<Course[]>(
      this.get('all'),
      handleSuccess,
      handleError
    );
  }

  async getGetById(
    id: number,
    handleSuccess?: (model: LoginRequestDto) => void,
    handleError?: () => void
  ) {
    return await this.process(
      this.get(id.toString()),
      handleSuccess,
      handleError
    );
  }

  async getMyAll(
    handleSuccess: (model: Course[]) => void,
    handleError: () => void
  ) {
    return await this.process(this.get(''), handleSuccess, handleError);
  }

  async deleteByBody(
    id: number,
    handleSuccess: (model: unknown) => void,
    handleError: () => void
  ) {
    return await this.process(
      this.remove('', { data: { id } }),
      handleSuccess,
      handleError
    );
  }
}
