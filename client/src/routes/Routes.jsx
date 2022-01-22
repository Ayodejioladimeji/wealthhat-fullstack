import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Onboarding from './../pages/Onboarding';
import Home from './../pages/Home';
import RiskAssessment from './../pages/RiskAssessment';
import RiskProfile from './../pages/RiskProfile';
import SetupInvestment from './../pages/SetupInvestment';
import Login from './../pages/Login';
import Register from './../pages/Register';
import ForgotPassword from './../pages/Forgot';
import ResetPassword from './../pages/Reset';
import Dashboard from '../dashboard/pages/Dashboard';
import Profile from './../dashboard/pages/Profile';
import Settings from './../dashboard/pages/Settings';
import PayIn from './../dashboard/pages/PayIn';
import withdrawal from './../dashboard/pages/withdrawal';
import InvestmentPortfolio from './../dashboard/pages/InvestmentPortfolio';
import CashPortfolio from './../dashboard/pages/CashPortfolio';
import Transfer from './../dashboard/pages/Transfer';
import Activity from './../dashboard/pages/Activity';
import Refer from './../dashboard/pages/Refer';
import Help from './../dashboard/pages/Help';
import Verification from '../pages/Verification';
import ActivationEmail from './../components/activation/ActivationEmail';
// import Route from './Route';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/sign_up' exact component={Register} />
      <Route path='/verification' exact component={Verification} />
      <Route
        path='/api/activation/:activation_token'
        exact
        component={ActivationEmail}
      />
      <Route path='/home' exact component={Home} />
      <Route path='/forgot_password' exact component={ForgotPassword} />
      <Route path='/api/reset/:token' exact component={ResetPassword} />
      <PrivateRoute path='/onboarding' exact component={Onboarding} />
      <Route
        path='/onboarding/risk_assessment'
        exact
        component={RiskAssessment}
      />
      <Route path='/onboarding/risk_profile' exact component={RiskProfile} />
      <Route
        path='/onboarding/setup_investment'
        exact
        component={SetupInvestment}
      />

      {/* ========================================== */}
      {/* DASHBOARD SECTION */}

      <Route path='/dashboard_home' exact component={Dashboard} />
      <Route path='/dashboard/profile' exact component={Profile} />
      <Route path='/dashboard/settings' exact component={Settings} />
      <Route path='/dashboard/pay_in' exact component={PayIn} />
      <Route path='/dashboard/withdrawal' exact component={withdrawal} />
      <Route
        path='/dashboard/investment_portfolio'
        exact
        component={InvestmentPortfolio}
      />
      <Route path='/dashboard/cash_portfolio' exact component={CashPortfolio} />
      <Route path='/dashboard/transfer' exact component={Transfer} />
      <Route path='/dashboard/activity' exact component={Activity} />
      <Route path='/dashboard/help' exact component={Help} />
      <Route path='/dashboard/refer' exact component={Refer} />
    </Switch>
  );
};

export default Routes;
