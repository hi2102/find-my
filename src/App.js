import Layout from './component/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from './routes/RoutePage';

export default function App() {
  return <BrowserRouter>
    <Layout>
      <RoutePage />
    </Layout>
  </BrowserRouter>
}