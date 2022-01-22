import React, { useState, useContext } from 'react';

// PACKAGES
import { useHistory } from 'react-router-dom';

// COMPONENTS
import { useStep } from 'react-hooks-helper';
import PersonalOne from './PersonalOne';
import PersonalTwo from './PersonalTwo';
import PersonalThree from './PersonalThree';
import HomeScreen from './homescreen/HomeScreen';
import { patchDataAPI } from '../../utils/fetchData';
import { Context } from './../../Context';
const steps = [
  { id: 'stepone' },
  { id: 'steptwo' },
  { id: 'stepthree' },
  { id: 'stepfour' },
];

// THE INITIAL STATE
const initialState = {
  title: '',
  firstname: '',
  lastname: '',
  gender: '',
  nationality: '',
  dayofbirth: '',
  monthofbirth: '',
  yearofbirth: '',
  phone: '',
  address: '',
  bvn: '',
  accountNumber: '',
  bank: '',
};

export const Step = () => {
  const state = useContext(Context);
  const [token] = state.token;
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // The handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };



  // The Edit Profile function
  const updateInfor = async () => {
    try {
      setLoading(true);
      await patchDataAPI('update', data, token);
      setData({ ...data });
      history.push('/onboarding/risk_assessment');
      setLoading(false);
    } catch (error) {
      console.log(error); 
    }
  };

  const props = { navigation };

  switch (step.id) {
    case 'stepone':
      return <HomeScreen {...props} />;

    case 'steptwo':
      return <PersonalOne {...props} data={data} handleChange={handleChange} />;

    case 'stepthree':
      return <PersonalTwo {...props} data={data} handleChange={handleChange} />;

    case 'stepfour':
      return (
        <PersonalThree {...props} updateInfor={updateInfor} loading={loading} />
      );

    default:
      return step;
  }
};
