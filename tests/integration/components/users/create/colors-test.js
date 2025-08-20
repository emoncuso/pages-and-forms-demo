import { module, test } from 'qunit';
import { setupRenderingTest } from 'pages-and-forms-demo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | users/create/colors', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Users::Create::Colors />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Users::Create::Colors>
        template block text
      </Users::Create::Colors>
    `);

    assert.dom().hasText('template block text');
  });
});
