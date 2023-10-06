import React from 'react';
import { AuthDialog } from '@components/dialogs/auth';

interface IAuthPageProps {
  onlyForTeacher?: boolean;
}

export const AuthPage = (props: IAuthPageProps) => {
  return (
    <div>
      <AuthDialog
        onlyForTeacher={props.onlyForTeacher as boolean}
        isOpen
        onOpenChange={() => {}}
      />
    </div>
  );
};
