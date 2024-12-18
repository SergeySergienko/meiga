import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { AuthLayout, MainLayout, NoAuthLayout } from './layouts';
import {
  AuthPage,
  CreateEventPage,
  DownloadsPage,
  EditEventPage,
  EmailConfirmationPage,
  EventsPage,
  HomePage,
  ImpressumPage,
  ErrorPage,
  EmailVerificationPage,
  CreateTeamMemberPage,
  EditTeamMemberPage,
  TeamMembersPage,
  CandidatesPage,
  PersonPage,
  PrivacyPage,
  UsersPage,
} from './pages';
import { eventApi } from './api';

import './App.css';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/team-members'>
          <Route index element={<TeamMembersPage />} />
          <Route path=':personId' element={<PersonPage />} />
        </Route>
        <Route
          path='/events'
          element={<EventsPage />}
          loader={async () => {
            const { data } = await eventApi.findAll();
            return data;
          }}
        />
        <Route path='/downloads' element={<DownloadsPage />} />
        <Route path='/impressum' element={<ImpressumPage />} />
        <Route path='/privacy' element={<PrivacyPage />} />

        <Route element={<NoAuthLayout />}>
          <Route path='/auth' element={<AuthPage />} />
          <Route
            path='/email-confirmation/:activationToken'
            element={<EmailConfirmationPage />}
          />
          <Route
            path='/email-verification'
            element={<EmailVerificationPage />}
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route
            path='/create-team-member'
            element={<CreateTeamMemberPage />}
          />
          <Route path='/edit-team-member' element={<EditTeamMemberPage />} />
        </Route>
        <Route element={<AuthLayout allowedRoles={['ADMIN', 'OWNER']} />}>
          <Route path='/create-event' element={<CreateEventPage />} />
          <Route path='/edit-event' element={<EditEventPage />} />
          <Route path='/candidates' element={<CandidatesPage />} />
          <Route path='/users' element={<UsersPage />} />
        </Route>

        <Route path='/error' element={<ErrorPage />} />
        <Route
          path='*'
          element={
            <ErrorPage
              title='404 Nicht gefunden'
              message='Diese Seite existiert nicht'
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
