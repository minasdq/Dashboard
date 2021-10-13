import {Route,Switch} from 'react-router-dom'

import Dashboard from '../pages/dashboard'
import Customers from '../pages/customers'

const Routes= () => {
    return (
            <Switch>
                <Route path="/customers" component={Customers}/>
                <Route path="/" component={Dashboard}/>
            </Switch>
    )
}

export default Routes