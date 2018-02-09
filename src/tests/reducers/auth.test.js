import authReducer from '../../reducers/auth';

test('should set user id', () => {
  const uid = 'abc123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(uid);
});

test('should unset user id', () => {
  const currentState = {
    uid: 'abc123'
  }
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(currentState, action);
  expect(state).toEqual({});
});