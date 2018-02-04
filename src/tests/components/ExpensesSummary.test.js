import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render summary phrase correctly with one expense', () => {
  const expenseCount = 1;
  const expensesTotal = 9434;
  const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expensesTotal={expensesTotal}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render summary phrase correctly with multiple expenses', () => {
  const expenseCount = 2;
  const expensesTotal = 9434;
  const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expensesTotal={expensesTotal}/>);
  expect(wrapper).toMatchSnapshot();
});