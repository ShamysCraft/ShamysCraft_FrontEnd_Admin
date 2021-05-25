import React from 'react'
import { Route, Switch } from 'react-router-dom'


// page content for admin
// import Home from "./admin/Home"
import Home from "./admin/Home"

import Sales from "./admin/ShopSalesPage"


import AddCategory from "./admin/AddCategory"
import AddItem from "./admin/AddItemPage"
import UpdateProduct from "./admin/UpdateProducts"


import Orders from "./admin/Orders"
import OrdersReceived from "./admin/OrdersReceived"
import ConfirmOrder from "./admin/ConfirmedOrderPage"
import RejectedOrder from "./admin/RejectedOrders"

//user
import ProfilePage from "./user/ProfilePage"
import SignIn from "./user/SignIn"
import AdminDashboard from "./user/AdminDashBoard"
import Help from "./admin/HelpPage"

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
        <AdminRoute path="/adminDashboard" exact component={AdminDashboard}/>
        <AdminRoute path="/profile" component={ProfilePage}/>
        <AdminRoute path='/addItem' component={AddItem} />
        
        <AdminRoute path='/help' component={Help} />


        <AdminRoute path='/shopSales' component={Sales} />


        <AdminRoute path='/orders' component={Orders} />

        <AdminRoute path='/manageCategory' component={AddCategory} />

        <AdminRoute path='/product/update/:productId' exact component={UpdateProduct} />


        <AdminRoute path='/ordersReceived' component={OrdersReceived} />

        <AdminRoute path='/confirmOrder' component={ConfirmOrder} />

        <AdminRoute path='/rejectedOrder' component={RejectedOrder} />



      </Switch>

    </div>
  )
}

export default Routes
