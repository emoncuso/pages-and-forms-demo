import Route from '@ember/routing/route';

export default class UsersUserRoute extends Route {
  async model({ id }) {
    const res = await fetch(`/users/${id}`);
    if (!res.ok) throw new Error('unable to get users!')

    const { user } = await res.json();

    return {
      user
    }
  }
}
