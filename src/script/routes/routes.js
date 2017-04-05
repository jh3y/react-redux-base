import React from 'react'
import { Route } from 'react-router'
import CoreLayout from '../layouts/core';
import CreateLayout from '../layouts/create';
import Root from '../routes/root/root';
import List from '../routes/list/list';
import Create from '../routes/create/create';
/**
  * Declaritve routes instead of JSX style
  <Router history={ hashHistory }>
    <Route component={ Layout }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home }/>
        <Route component={ CreateLayout }>
          <Route path='/create' component={ Create }/>
        </Route>
      </Route>
    </Route>
  </Router>
*/
// const routes = {
//   component: CoreLayout,
//   childRoutes: [
//     {
//       path: '/',
//       component: Root,
//       indexRoute: {
//         component: List
//       },
//       childRoutes: [
//         {
//           component: CreateLayout,
//           childRoutes: [
//             {
//               path: '/create',
//               component: Create
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

const routes = (
  <Route component={ CoreLayout }>
    {/* <Route path='/' component={ App }>
      <Route component={ Home }/>
      <Route component={ CreateLayout }>
        <Route path='/create' component={ Create }/>
      </Route>
    </Route> */}
  </Route>
)

export default routes;
