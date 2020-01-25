import DS from 'ember-data';

export default DS.Model.extend({
    sourceCity: DS.attr('string'),
    destinationCity: DS.attr('string'),
    startDate: DS.attr('readable-date'),
    endDate: DS.attr('readable-date'),
    arrivalTransport: DS.attr('string'),
    departureTransport: DS.attr('string'),
    sourceFlight: DS.attr('string'),
    returningFlight: DS.attr('string'),
    sourceFlightCarrier: DS.attr('string'),
    returningFlightCarrier: DS.attr('string')
});
