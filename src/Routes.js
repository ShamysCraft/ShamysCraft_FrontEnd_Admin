import React from 'react'
import { Route, Switch } from 'react-router-dom'


// page content for admin
// import Home from "./admin/Home"
import Home from "./admin/Home"

import Sales from "./admin/ShopSalesPage"


import AddCategory from "./admin/AddCategory"
import AddItem from "./admin/AddItemPage"
import ManageProducts from "./admin/ManageProducts"
import UpdateProducts from "./admin/UpdateProduct"


import Orders from "./admin/Orders"
import PendingOrder from "./admin/PendingOrderPage"
import ConfirmOrder from "./admin/ConfirmedOrderPage"
import RejectedOrder from "./admin/RejectedOrders"

//user
import ProfilePage from "./user/ProfilePage"
import SignIn from "./user/SignIn"
import AdminDashboard from "./user/AdminDashBoard"

//import Admin Route
import AdminRoute from "./auth/helper/AdminRoute"

//error
import Error from "./admin/ErrorPage"


function Routes() {
  return (
    <div>
      <Switch>

        <Route path="/signin" component={SignIn} />
        <Route path="/error" component={Error} />

        <AdminRoute path="/" exact component={Home}/>
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
        <AdminRoute path="/profile" component={ProfilePage}/>
        <AdminRoute path='/addItem' component={AddItem} />


        <AdminRoute path='/shopSales' component={Sales} />


        <AdminRoute path='/orders' component={Orders} />

        <AdminRoute path='/addCategory' component={AddCategory} />

        <AdminRoute path='/updateProduct' component={UpdateProducts} />

        <AdminRoute path='/manageProduct' component={ManageProducts} />

        <AdminRoute path='/pendingOrder' component={PendingOrder} />

        <AdminRoute path='/confirmOrder' component={ConfirmOrder} />

        <AdminRoute path='/rejectedOrder' component={RejectedOrder} />



      </Switch>

    </div>
  )
}

export default Routes
