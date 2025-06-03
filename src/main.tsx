import './index.css'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import {
  RouterProvider,
} from "react-router";

import { store } from './contexts/store';
import { router } from './routes';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
