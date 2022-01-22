import React, { useState } from "react";
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";
import RiskOne from "./RiskOne";
import RiskTwo from "./RiskTwo";
import RiskThree from "./RiskThree";
import RiskFour from "./RiskFour";
import RiskFive from "./RiskFive";
import RiskSix from "./RiskSix";
import RiskSeven from "./RiskSeven";
import RiskEight from "./RiskEight";
import RiskNine from "./RiskNine";
import RiskTen from "./RiskTen";
import RiskEleven from "./RiskEleven";

const steps = [
  { id: "stepone" },
  { id: "steptwo" },
  { id: "stepthree" },
  { id: "stepfour" },
  { id: "stepfive" },
  { id: "stepsix" },
  { id: "stepseven" },
  { id: "stepeight" },
  { id: "stepnine" },
  { id: "stepten" },
];

const initialValues = {
  goal: "",
  financial: "",
  howOld: "",
  retire: "",
  situation: "",
  withdraw: "",
  when: 0,
  percentage: "",
  likely: 0,
  approach: "",
};

export const Step = () => {
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // THE SECTION OF THE HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // THE SECTION OF THE HANDLE ATTITUDE
  const handleAttitude = (e) => {
    e.preventDefault();
    let result = Object.values(values);

    const res = result.map((item) => {
      return parseInt(item, 10);
    });

    const response = res.reduce((acc, item) => {
      return acc + item;
    }, 0);


    sessionStorage.setItem('profile', JSON.stringify(response));

    setLoading(true);
    setTimeout(() => {
      navigation.next();
      setLoading(false);
    }, 2000);
  };

  // THE SECTION OF THE HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      history.push("/onboarding/setup_investment");
      setLoading(false);
    }, 2500);
  };

  const props = { navigation };

  switch (step.id) {
    case "stepone":
      return <RiskOne {...props} handleChange={handleChange} values={values} />;

    case "steptwo":
      return <RiskTwo {...props} handleChange={handleChange} values={values} />;

    case "stepthree":
      return (
        <RiskThree {...props} handleChange={handleChange} values={values} />
      );

    case "stepfour":
      return (
        <RiskFour {...props} handleChange={handleChange} values={values} />
      );

    case "stepfive":
      return (
        <RiskFive {...props} handleChange={handleChange} values={values} />
      );

    case "stepsix":
      return <RiskSix {...props} handleChange={handleChange} values={values} />;

    case "stepseven":
      if (values.withdraw === "8") {
        return (
          <RiskSeven {...props} handleChange={handleChange} values={values} />
        );
      } else {
        return (
          <RiskEight {...props} handleChange={handleChange} values={values} />
        );
      }

    case "stepeight":
      return (
        <RiskNine {...props} handleChange={handleChange} values={values} />
      );

    case "stepnine":
      return (
        <RiskTen
          {...props}
          handleChange={handleChange}
          values={values}
          handleAttitude={handleAttitude}
          loading={loading}
        />
      );

    case "stepten":
      return (
        <RiskEleven
          {...props}
          handleChange={handleChange}
          values={values}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      );

    default:
      return step;
  }
};
