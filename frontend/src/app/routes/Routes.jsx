import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import Professional from '@pages/Professional'
import TypeProfessional from '@pages/TypeProfessional'

import Layout from '@components/Layout'
import { UserValidate, UserConsumer } from '@contexts/User'

export default () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/">
      {props => (
        <UserConsumer>
          {({ user }) => (
            <Layout user={user} {...props}>
              <UserValidate {...props}>
                <Route exact path="/professional" component={Professional} />
                <Route exact path="/type_professional" component={TypeProfessional} />
              </UserValidate>
            </Layout>
          )}
        </UserConsumer>
      )}
    </Route>
    <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/login" />
  </Switch>
)
