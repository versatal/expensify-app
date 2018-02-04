import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expense-total';

export const ExpensesSummary = ( {expenseCount, expensesTotal} ) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const summaryPhrase = `Viewing ${expenseCount} ${expenseWord} totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`;
  return (
    <div>
        <h1>{summaryPhrase}</h1> 
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters) 
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);