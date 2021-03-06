import Vue from 'vue';
import Router from 'vue-router';
import PeopleList from '@/components/PeopleList';
import Person from '@/components/Person';
import Login from '@/components/Login';
import authUtils from '../utils/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'People',
      beforeEnter: authUtils.requireAuth,
      component: PeopleList,
    },
    {
      path: '/person/:id',
      name: 'Person',
      beforeEnter: authUtils.requireAuth,
      component: Person,
      props: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
