import Vue from 'vue'
import Router from 'vue-router'
import ManageIndex from './views/ManageIndex'
import OrdinaryControl from './views/user/ordinary/OrdinaryControl'
import AdminControl from './views/user/admin/AdminControl'
import OrdinaryList from './views/user/admin/OrdinaryList'
import BookIndex from './views/book/BookIndex'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/m', name: 'ManageIndex', component: ManageIndex, children: [
                //user 普通用户
                {
                    path: '/m/user', name: 'ordinaryControl', component: OrdinaryControl
                },
                //admin 管理员用户
                {
                    path: '/m/admin', name: 'AdminControl', component: AdminControl
                },
                // admin/list
                {
                    path: '/m/admin/list', name: 'OrdinaryList', component: OrdinaryList
                },
                //book
                {
                    path: '/m/book', name: ' BookIndex', component: BookIndex
                }
            ]
        },

    ]
});
