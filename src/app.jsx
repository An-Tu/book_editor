import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppLayout from 'src/layouts/app_layout';
import ListPage from 'src/pages/list_page';
import FormPage from 'src/pages/form_page';
import Header from 'src/components/header';

const App = () => (
  <BrowserRouter>
    <AppLayout
      header={<Header />}
      main={
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route path="/form" component={FormPage} />
          <Redirect push to="/" />
        </Switch>
      }
    />
  </BrowserRouter>
);

export default App;
