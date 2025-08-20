import { module, test } from 'qunit';
import { setupRenderingTest } from 'pages-and-forms-demo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pages/users/create', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Pages::Users::Create />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Pages::Users::Create>
        template block text
      </Pages::Users::Create>
    `);

    assert.dom().hasText('template block text');
  });
});
