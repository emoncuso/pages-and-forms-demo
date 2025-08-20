import { module, test } from 'qunit';
import { setupTest } from 'pages-and-forms-demo/tests/helpers';

module('Unit | Route | users/list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:users/list');
    assert.ok(route);
  });
});
