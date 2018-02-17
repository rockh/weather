import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  urlForQueryRecord() {
    return 'http://api.openweathermap.org/data/2.5/forecast?appid=1cd4fdea7efcd03e6b6cba83da1d1bd9&&units=metric';
  }

});
