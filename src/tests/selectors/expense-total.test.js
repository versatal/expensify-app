import selectExpenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpenseTotal([]);
  expect(result).toBe(0);
})

test('should correctly add up a single expense', () => {
  const oneExpense = [expenses[0]];
  const result = selectExpenseTotal(oneExpense);
  expect(result).toBe(oneExpense[0].amount);  
})

test('should correctly add up a single expense', () => {
  const result = selectExpenseTotal(expenses);
  expect(result).toBe(114195);  
})
