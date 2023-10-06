import { Account } from '@lib/api/models';
import AvatarImageSrc from '@assets/images/Avatar.png';

export const getFallback = (user?: Account): string =>
  user
    ? user.userInfo?.firstName?.toUpperCase() +
      user.userInfo?.secondName?.toUpperCase()
    : '';
