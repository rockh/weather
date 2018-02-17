import DS from 'ember-data';

export default DS.Model.extend({
  dateForcasted: DS.attr('date'),
  dayLabel: DS.attr('string'),
  description: DS.attr('string'),
  weekday: DS.attr('string'),
  icon: DS.attr('string'),
  main: DS.attr('string'),
  max: DS.attr(),
  min: DS.attr(),
  temp: DS.attr(),
  weather: DS.attr(),
  clouds: DS.attr(),
  wind: DS.attr(),
  hours: DS.attr()
});
