import Route from '@ember/routing/route';

export default class UsersListRoute extends Route {
  async model() {
    const res = await fetch('/users');
    if (!res.ok) throw new Error('unable to get users!')

    const { users } = await res.json();
    
    return {
      users
    }
  }
}
