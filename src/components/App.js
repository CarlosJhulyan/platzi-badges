import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route path="/badges/new" component={BadgeNew}/>
                    <Route component={NotFound}/>
                    <Redirect to="/error" from="*"/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;