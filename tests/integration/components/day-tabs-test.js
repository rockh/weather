import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';

moduleForComponent('day-tabs', 'Integration | Component | day tabs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let days = A([
    {id: '2018-02-17', weekday: 'Sat Feb 17', icon: '02d', main: 'Clouds', min: '8.0', max: '13.6'},
    {id: '2018-02-18', weekday: 'Sun Feb 18', icon: '02d', main: 'Clouds', min: '8.0', max: '13.6'},
    {id: '2018-02-19', weekday: 'Mon Feb 19', icon: '02d', main: 'Clouds', min: '8.0', max: '13.6'},
    {id: '2018-02-20', weekday: 'Tue Feb 20', icon: '02d', main: 'Clouds', min: '8.0', max: '13.6'},
    {id: '2018-02-21', weekday: 'Wed Feb 21', icon: '02d', main: 'Clouds', min: '8.0', max: '13.6'}
  ]);

  this.set('days', days);

  this.on('listHourWeather', function () {});

  this.render(hbs`{{day-tabs days=days onChooseDay=(action 'listHourWeather')}}`);

  let tabs = this.$().find('ul.tabs');
  let activeTab = tabs.find('li.active');

  assert.equal(tabs.find('li').length, 5);
  assert.equal(activeTab.find('[name="icon"]>img').attr('src'), 'https://openweathermap.org/img/w/02d.png');
  assert.equal(activeTab.find('[name="weekday"]').text(), 'Sat Feb 17');
  assert.equal(activeTab.find('[name="main"]').text(), 'Clouds');
  assert.equal(activeTab.find('[name="min-max"]').text(), '8.0/13.6');
});
