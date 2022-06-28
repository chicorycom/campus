/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: 'dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  /*{
    path: 'hero-home',
    icon: 'FormsIcon',
    name: 'Hero Home',
  },*/
  {
    path: 'cards',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  {
    path: 'charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: 'buttons',
    icon: 'ButtonsIcon',
    name: 'Buttons',
  },
  {
    path: 'modals',
    icon: 'ModalsIcon',
    name: 'Modals',
  },
  {
    path: 'tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
  {
    icon: 'SettingsIcon',
    name: 'Settings',
    routes: [
      {
        path: 'services',
        name: 'Services',
      },
      {
        path: 'formations',
        name: 'Formation',
      },
      {
        path: 'pricings',
        name: 'Pricings',
      },
      /*{
        path: 'menus',
        name: 'Menus',
      },
      {
        path: 'login',
        name: 'Login',
      },
      {
        path: 'create-account',
        name: 'Create account',
      },
      {
        path: 'forgot-password',
        name: 'Forgot password',
      },
      {
        path: '404',
        name: '404',
      },*/
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
  
]

export default routes
