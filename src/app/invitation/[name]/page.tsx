import ButtonOpenPage from '@/components/undangan/ButtonOpenPage';
import LandingPage from '@/components/undangan/LandingPage';
import React from 'react'

const Page = ({params} : {params: {name: string}}) => {
  return (
    <>
        <LandingPage name={params.name}>
          <ButtonOpenPage/>
        </LandingPage>
    </>
  );
};

export default Page;