// // @packages
// import React from 'react';
// import { Provider } from 'react-redux';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import configureStore from 'redux-mock-store';

// // @app
// import { AuthContext } from 'components/Context/Auth';

// // @own
// import Routes from '../index';

// const mockStore = configureStore([]);
// const customRender = (ui, { providerProps, ...renderOptions }) => render(
//   <AuthContext.Provider {...providerProps}>
//     {ui}
//   </AuthContext.Provider>,
//   renderOptions,
// );

// describe('render routes correctly', () => {
//   const store = mockStore({});
//   it('render path="/"', () => {
//     customRender(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={['/']}>
//           <Routes />
//         </MemoryRouter>
//       </Provider>,
//       {
//         providerProps: {
//           value: {
//             authStatus: false,
//           },
//         },
//       },
//     );

//     const button = screen.getByRole('button', { name: /Login /i });
//     expect(button).toBeInTheDocument();
//   });

//   it('render 404', () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={['/error']}>
//           <Routes />
//         </MemoryRouter>
//       </Provider>,
//     );

//     const errorMessage = screen.getByText(/Page not found/i);
//     expect(errorMessage).toBeInTheDocument();
//   });
// });
