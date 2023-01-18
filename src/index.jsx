import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { router } from './utils/router/router'
import { store } from './utils/store/store'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}
		>
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</PersistGate>
	</Provider>
)

// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { RouterProvider } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

// import { store, persistor } from './store';
// import { router } from './router';

// describe('App', () => {
//     afterEach(cleanup);

//     it('should render without crashing', () => {
//         const { container } = render(
//             <Provider store={store}>
//                 <PersistGate persistor={persistor}>
//                     <React.StrictMode>
//                         <RouterProvider history={createMemoryHistory()}>
//                             <router.Router />
//                         </RouterProvider>
//                     </React.StrictMode>
//                 </PersistGate>
//             </Provider>
//         );
//         expect(container).toBeInTheDocument();
//     });
