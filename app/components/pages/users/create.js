import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class PagesUsersCreate extends Component {
  @service router;
  
  handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);

    const payload = {
      name: fd.get('name'),
      favoriteColor: fd.get('favoriteColor'),
    }

    const res = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ user: payload }),
    });

    if (!res.ok) throw new Error('unable to create user!');

    const { user } = await res.json();

    alert('created user with id', user.id);

    this.router.transitionTo('users.list');
  }
}
