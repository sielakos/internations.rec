/**
 * Simple reducers that adds new user to state
 *
 * @param state
 * @param user
 */
export default (state, {user}) => {
  const {users} = state;
  const newUser = Object.assign({}, user, {isNew: false});

  return Object.assign({}, state, {
    users: users.concat(newUser),
    currentUser: {name: '', userGroups: [], isNew: true}
  });
}