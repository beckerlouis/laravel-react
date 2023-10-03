import { Card, DeleteUserForm, UpdatePasswordForm, UpdateProfileInformationForm } from '../Components';
import App from '../../Layouts/App';
import { clx } from '@kit/utils';
import React from 'react';

const Profile = ({ mustVerifyEmail, status }: any) => (
  <>
    <Card>
      <h2 className={clx('text-xl text-gray-800 font-semibold leading-tight')}>Profile</h2>
    </Card>
    <Card>
      <UpdateProfileInformationForm
        mustVerifyEmail={mustVerifyEmail}
        status={status}
      />
    </Card>
    <Card>
      <UpdatePasswordForm/>
    </Card>
    <Card>
      <DeleteUserForm/>
    </Card>
  </>
);

Profile.layout = (page) => <App>{page}</App>;

export default Profile;
