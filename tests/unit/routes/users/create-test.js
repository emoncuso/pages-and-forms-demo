import { module, test } from 'qunit';
import { setupTest } from 'pages-and-forms-demo/tests/helpers';

module('Unit | Route | users/create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:users/create');
    assert.ok(route);
  });
});
