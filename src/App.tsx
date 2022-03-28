import { Layout } from 'antd';
import AppRouter from 'components/AppRouter';
import Navbar from 'components/Navbar';
import { FC } from 'react';
import './App.scss'


const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
