import React from 'react'
import { Route, Switch } from 'react-router-dom'


// page content for admin
// import Home from "./admin/Home"
import Sales from "./admin/ShopSalesPage"


import AddItem from "./admin/AddItemPage"
import AddCategory from "./admin/AddCategory"
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



function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/admin/dashboard" component={AdminDashboard} />

        <Route path="/profile" component={ProfilePage} />

        <Route path="/signin" component={SignIn} />

        <Route path='/shopSales' component={Sales} />

        <Route path='/addItem' component={AddItem} />

        <Route path='/orders' component={Orders} />

        <Route path='/addCategory' component={AddCategory} />

        <Route path='/updateProduct' component={UpdateProducts} />

        <Route path='/manageProduct' component={ManageProducts} />

        <Route path='/pendingOrder' component={PendingOrder} />

        <Route path='/confirmOrder' component={ConfirmOrder} />

        <Route path='/rejectedOrder' component={RejectedOrder} />



      </Switch>

    </div>
  )
}

export default Routes
