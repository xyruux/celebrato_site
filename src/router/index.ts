import { createRouter, createWebHistory, RouteRecordRaw, RouteMeta } from 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    allowedRoles?: string[]; // Ensure it is always an array of strings
  }
}
const routes: RouteRecordRaw[] = [ 
  // public
    { path: '/', name: 'home', component: () => import('../views/home.vue') }, 
    { path: '/products', name: 'products', component: () => import('../views/products.vue') }, 
    { path: '/inquiry', name: 'inquiry', component: () => import('../views/inquiry.vue') }, 
  
    { path: '/preview/:id?', name: 'preview', component: () => import('../views/deploy/preview.vue')  },
    { path: '/invitation/:id?', name: 'invitation', component: () => import('../views/deploy/invitation.vue') },

    { path: '/login', name: 'login', component: () => import('../views/auth/login.vue') },
    { path: '/register', name: 'register', component: () => import('../views/auth/register.vue') },
    { path: '/forgot', name: 'forgot', component: () => import('../views/auth/forgot.vue') },
    { path: '/reset', name: 'reset', component: () => import('../views/auth/reset.vue') },

  // authenticated
    // admin
    { path: '/admin/dashboard', name: 'admin-dashboard', component: () => import('../views/admin/dashboard.vue'), meta: { requiresAuth: true, allowedRoles: ['a','a1'] }},
    { path: '/admin/project', name: 'admin-project', component: () => import('../views/admin/setup/project.vue'), meta: { requiresAuth: true, allowedRoles: ['a','a1'] } },
    { path: '/admin/project-list', name: 'admin-project-list', component: () => import('../views/admin/setup/project-list.vue'), meta: { requiresAuth: true, allowedRoles: ['a','a1'] } },
    { path: '/admin/templates', name: 'admin-templates', component: () => import('../views/admin/setup/create_new.vue'), meta: { requiresAuth: true, allowedRoles: ['a','a1']  } },
    { path: '/admin/templates/website/editor', name: 'admin-template-website-editor', component: () => import('../views/themes/index.vue'), meta: { requiresAuth: true , allowedRoles: ['a','a1'] } },
    { path: '/admin/templates/rsvp/editor', name: 'admin-template-rsvp-editor', component: () => import('../views/themes/index.vue'), meta: { requiresAuth: true , allowedRoles: ['a','a1'] } },
    { path: '/admin/maintenance', name: 'admin-maintenance', component: () => import('../views/admin/maintenance/index.vue'), meta: { requiresAuth: true, allowedRoles: ['a','a1'] } },

 
    // guest
    { path: '/dashboard', name: 'client-dashboard', component: () => import('../views/client/dashboard.vue'), meta: { requiresAuth: true, allowedRoles: ['b2'] }},
    { path: '/checklist', name: 'client-checklist', component: () => import('../views/client/checklist.vue'), meta: { requiresAuth: true, allowedRoles: ['b2'] }},
    { path: '/rsvp', name: 'client-rsvp', component: () => import('../views/client/rsvp.vue'), meta: { requiresAuth: true, allowedRoles: ['b2'] }},
    { path: '/messages', name: 'client-messages', component: () => import('../views/client/messages.vue'), meta: { requiresAuth: true, allowedRoles: ['b2'] }},
    { path: '/account', name: 'client-account', component: () => import('../views/client/account.vue'), meta: { requiresAuth: true, allowedRoles: ['b2'] }},
    // { path: '/products', name: 'products', component: () => import('../views/admin/products.vue'), meta: { requiresAuth: true }},


    // Catch-all route for invalid pages
    { path: '/:pathMatch(.*)*',   name: 'error',  component: () => import('../views/error/Invalid_Page.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('celebrato_user') // Check if user data exists
  const userData = isAuthenticated ? JSON.parse(isAuthenticated) : null;
  const celebrato_access_role = JSON.parse(isAuthenticated)?.access_role 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirect to login if not authenticated
  } 
  if (to.meta.allowedRoles && celebrato_access_role) {
    if (!to.meta.allowedRoles.includes(celebrato_access_role)) {
      next(from.fullPath); // Redirect back to previous page
      return;
    }
  }

  next() // Proceed as normal

})
export default router
