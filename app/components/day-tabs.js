import Component from '@ember/component';

export default Component.extend({

  didInsertElement: function () {
    this.send('chooseDay', this.get('days').get('firstObject'));
  },

  actions: {
    chooseDay(weather) {
      this.set('selectedDay', weather.id);
      this.get('onChooseDay')(weather);
    }
  }

});
