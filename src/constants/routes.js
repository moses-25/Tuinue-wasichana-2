const routes = {
  // Public pages
  HOME: '/',
  ABOUT: '/about',
  PROGRAMS: '/programs',
  STORIES: '/stories',
  CHARITIES: '/charities',
  CHARITY_DETAILS: '/charities/:id',
  DONATE: '/donate',
  FAQ: '/faq',
  CONTACT: '/contact',

  // Auth
  LOGIN: '/login',
  REGISTER: '/register',

  // Dashboard
  DASHBOARD: '/dashboard',

  // Admin
  ADMIN_DASHBOARD: '/admin',
  ADMIN_APPROVALS: '/admin/approvals',

  // Not Found
  NOT_FOUND: '*',
};

export default routes;

