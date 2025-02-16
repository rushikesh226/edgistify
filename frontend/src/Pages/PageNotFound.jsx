import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout title="Go Back= Page not found">
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/">Go Back</Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;