import React from 'react'
import { Route, Switch } from 'react-router-dom'


// page content for admin
import Shop from "./admin/ShopPage"
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
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/signin" component={SignIn} />
                
              <Route path="/dashboard">
                <AdminDashboard />
              </Route>
              <Route path='/shop'>
                <Shop />
              </Route>
              <Route path='/shopSales'>
                <Sales />
              </Route>
              <Route path='/addItem' exact>
                <AddItem />
              </Route>
              <Route path='/pendingOrder'>
                <PendingOrder />
              </Route>
              <Route path='/confirmOrder'>
                <ConfirmOrder />
              </Route>
              <Route path='/rejectedOrder'>
                <RejectedOrder />
              </Route>


            </Switch>
          
        </div>
    )
}

export default Routes
