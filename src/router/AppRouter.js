import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { UserRegister } from '../components/auth/UserRegister';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>

            <div>

                <Switch>

                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/user-register" component={ UserRegister } />
                    <Route exact path="/" component={ CalendarScreen } />

                    <Redirect to="/" />
                </Switch>

            </div>

        </Router>
    )
}
