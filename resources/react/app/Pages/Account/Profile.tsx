import App from '../../Layouts/App';
import { Card, DeleteUserForm, UpdatePasswordForm, UpdateProfileInformationForm } from '../components';
import { Fragment, ReactNode } from 'react';

const Profile = ({ mustVerifyEmail, status }: any) => (
  <Fragment>
    <Card>
      <h2 className="text-xl text-gray-800 font-semibold leading-tight">Profile</h2>
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
  </Fragment>
);

Profile.layout = (page: ReactNode) => <App>{page}</App>;

export default Profile;
