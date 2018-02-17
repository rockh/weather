import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

  normalizeQueryRecordResponse(store, primaryModelClass, payload) { // unused: id, requestType

    payload.days = payload.list

      .map(it => {
        let weather = it.weather[0];
        weather.dateForcasted = new Date(it.dt * 1000);
        weather.dayLabel = it.dt_txt.substr(0, 10);
        weather.weekday = weather.dateForcasted.toString().substr(0, 10);
        weather.min = it.main.temp_min.toFixed(1);
        weather.max = it.main.temp_max.toFixed(1);
        weather.temp = it.main.temp.toFixed(1);

        if (!payload[weather.dayLabel]) {
          payload[weather.dayLabel] = [];
        }

        if (it.dt_txt.substr(0, 10) === weather.dayLabel) {
          it.hourLabel = it.dt_txt.substr(11);
          it.id = it.hourLabel;
          it.main.temp = it.main.temp.toFixed(1);
          it.wind.speed = it.wind.speed.toFixed(1);
          payload[weather.dayLabel].push(it);
        }

        return weather;
      })

      .filter(it => {
        let hourForcasted = it.dateForcasted.getHours() || 24; // convert to 24 if current forecasted hour is 0.
        let currentHour = new Date().getHours();
        let within3hours = currentHour < hourForcasted && (hourForcasted - currentHour) <= 3;
        return within3hours;
      });

    payload.days.forEach(day => {
      day.id = day.dayLabel;
      day.hours = payload[day.dayLabel];
      delete payload[day.dayLabel];
    });

    delete payload.list;
    delete payload.cnt;
    delete payload.cod;
    delete payload.message;

    return this._super(...arguments);
  }

});
