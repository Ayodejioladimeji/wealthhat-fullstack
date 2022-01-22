import React from 'react';
import Topbar from '../topbar/Topbar';
import Attitude from './attitude/Attitude';

const RiskEleven = ({ navigation, handleSubmit, loading }) => {
  return (
    <>
      <Topbar title='Attitude to Risk' />
      <Attitude navigation={navigation} loading={loading} handleSubmit={handleSubmit} />
    </>
  );
};

export default RiskEleven;
