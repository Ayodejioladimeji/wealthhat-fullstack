import React, { useState, useEffect, useContext } from 'react';

// PACKAGES
import { useStep } from 'react-hooks-helper';

// COMPONENTS
import {Context} from '../../Context'
import { putDataAPI } from '../../utils/fetchData';
import SetUp from './setup/SetUp';
import PortName from './portname/PortName';
import Years from './years/Years';
import HowMuch from './howmuch/HowMuch';
import Projection from './projection/Projection';
import Pay from './pay/Pay';
import Summary from './summary/Summary'


const steps = [
  { id: 'stepone' },
  { id: 'steptwo' },
  { id: 'stepthree' },
  { id: 'stepfour' },
  { id: 'stepfive' },
  { id: 'stepsix' },
  { id: 'stepseven' },
];

const initialState = {
  savingFor: '',
  portName: '',
  years: 0,
  target: '',
  starting: 0,
  monthly: 0,
};

export const Step = () => {
  const state = useContext(Context)
  const [token]= state.token
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const [values, setValues] = useState(initialState);
  const [date, setDate] = useState([]);
  const [year] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const newYear = Array.from(
      new Array(parseInt(values.years)),
      (val, index) => index + year + 1
    );
    setDate(newYear);
  }, [year, values.years]);

  // THE SECTION OF THE HANDLECHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      setLoading(true)
      await putDataAPI('portfolio', values, token)
      setValues({...values })
      navigation.next();
      setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  }

  const props = { navigation };

  switch (step.id) {
    case 'stepone':
      return (
        <SetUp
          {...props}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
        />
      );

    case 'steptwo':
      return (
        <PortName {...props} handleChange={handleChange} values={values} />
      );

    case 'stepthree':
      return <Years {...props} values={values} handleChange={handleChange} />;

    case 'stepfour':
      return <HowMuch {...props} values={values} loading={loading} handleChange={handleChange} handleSubmit={handleSubmit} />;

    case 'stepfive':
      return (
        <Projection
          {...props}
          handleChange={handleChange}
          {...values}
          date={date}
        />
      );

    case 'stepsix':
      return <Summary {...props} values={values} />;
    
      case 'stepseven':
      return <Pay {...props} values={values} />;

    default:
      return step;
  }
};
