const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'printer', component: () => import('pages/printers/List.vue') },
      { path: 'printer/edit/:id', component: () => import('pages/printers/Edit.vue') },
      { path: 'printer/new', component: () => import('pages/printers/New.vue') },
      { path: 'printer/service', component: () => import('pages/printers/Service.vue') },
      { path: 'printer/scan', component: () => import('pages/printers/Scan.vue') },
    ],
  }, 

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
