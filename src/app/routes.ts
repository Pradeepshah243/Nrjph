import { createBrowserRouter } from 'react-router';
import Root from '@/app/components/Root';
import HomePage from '@/app/pages/HomePage';
import PaintsPage from '@/app/pages/PaintsPage';
import WaterproofingPage from '@/app/pages/WaterproofingPage';
import FalseCeilingPage from '@/app/pages/FalseCeilingPage';
import InteriorDesignPage from '@/app/pages/InteriorDesignPage';
import NotFoundPage from '@/app/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'paints', Component: PaintsPage },
      { path: 'waterproofing', Component: WaterproofingPage },
      { path: 'false-ceiling', Component: FalseCeilingPage },
      { path: 'interior-design', Component: InteriorDesignPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
