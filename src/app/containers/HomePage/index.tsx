import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AllOutfits } from 'app/containers/AllOutfits';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <AllOutfits />
    </>
  );
}
