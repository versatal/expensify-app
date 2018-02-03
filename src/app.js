import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters' 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));

const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));