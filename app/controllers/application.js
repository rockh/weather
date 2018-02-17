import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  id: 2643743,

  city: computed(function () {
    return this.store.peekRecord('city', this.id);
  }),

  days: computed(function () {
    return this.store.peekAll('day');
  }),

  actions: {
    listHourWeather(day) {
      this.set('hourList', day.get('hours'));
    }
  }

});
