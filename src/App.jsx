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
  EventsPage,
  HomePage,
  ImpressumPage,
  NotFoundPage,
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
            <NotFoundPage message='Diese Seite befindet sich in der Entwicklung' />
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

        <Route path='/createEvent' element={<CreateEventPage />} />
        <Route path='/editEvent' element={<EditEventPage />} />
        <Route
          path='*'
          element={<NotFoundPage message='Diese Seite existiert nicht' />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
