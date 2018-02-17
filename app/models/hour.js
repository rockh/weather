import DS from 'ember-data';

export default DS.Model.extend({
  hourLabel: DS.attr(),
  main: DS.attr(),
  wind: DS.attr()
});
