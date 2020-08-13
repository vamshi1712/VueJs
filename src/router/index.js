import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../home/HelloWorld.vue';
import RobotBuilder from '../build/RobotBuild.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HelloWorld,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
    name: 'Build',
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    component: PartInfo,
    name: 'Parts',
    beforeEnter(to, from, next) {
      const isValid = Number.isInteger(Number(to.params.id));
      next(isValid);
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  ],
});
