import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expense-total';

export const ExpensesSummary = ( {expenseCount, expensesTotal} ) => (
  <div>
    {expenseCount === 1  
      ? <p>{`Viewing ${expenseCount} expense totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`}</p> 
      : <p>{`Viewing ${expenseCount} expenses totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`}</p>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectTotal(selectExpenses(state.expenses, state.filters))
  }
};

export default connect(mapStateToProps)(ExpensesSummary);