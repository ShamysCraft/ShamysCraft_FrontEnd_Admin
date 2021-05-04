import React from "react"
import {Route, Redirect} from "react-router-dom"

import {isAuthenticated} from "./index"

//mount one component
const AdminRoute =({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated() && isAuthenticated().user.role === 45 ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoute;