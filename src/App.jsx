import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
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
} from './pages';
import MainLayout from './layouts/MainLayout';

import './App.css';
import { eventApi } from './api';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path='/team'
          element={
            <ErrorPage
              title='Geduld bitte'
              message='Diese Website-Seite befindet sich in der Entwicklung'
            />
          }
        />
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
        <Route path='/auth' element={<AuthPage />} />
        <Route
          path='/email-confirmation/:activationToken'
          element={<EmailConfirmationPage />}
        />

        <Route path='/createEvent' element={<CreateEventPage />} />
        <Route path='/editEvent' element={<EditEventPage />} />
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
