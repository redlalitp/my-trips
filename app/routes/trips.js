import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('trips');
  },
  actions: {
      addTrip: function() {
        var newTrip = this.store.createRecord( 'trips', {
            arrivalTransport:"flight",
            departureTransport:"flight",
            destinationCity:"boulder",
            endDate:"August 26, 2018 at 5:00:00 PM UTC-5",
            returningFlight:"624",
            returningFlightCarrier:"Spirit",
            sourceCity:"chicago",
            sourceFlight:"F91285",
            sourceFlightCarrier:"Frontier",
            startDate:"August 23, 2018 at 12:15:00 AM UTC-5",
            tripId:1
        });
        newTrip.save();
      }
  }
});