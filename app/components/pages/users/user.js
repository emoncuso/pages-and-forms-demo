import Component from '@glimmer/component';
import {service} from '@ember/service';

export default class PagesUsersUser extends Component {
  @service router;
  handleSubmit = async (e) => {
    e.preventDefault();

    const id = this.args.model.user.id;
    const fd = new FormData(e.target);

    const payload = {
      ...this.args.model.user,
      name: fd.get('name'),
      favoriteColor: fd.get('favoriteColor'),
    }

    const res = await fetch(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ user: payload }),
    });

    if (!res.ok) throw new Error('unable to update user!');

    const { user } = await res.json();

    alert('update user with id', user.id);

    this.router.transitionTo('users.list');
  }

}
