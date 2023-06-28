import App from '../Layouts/App';
import Card from './Components/Card';
import React from 'react';

const Welcome = () => (
  <>
    <Card>
      <h2 className="text-xl text-gray-800 font-semibold leading-tight">App</h2>
    </Card>
  </>
);

Welcome.layout = (page) => <App>{page}</App>;

export default Welcome;
