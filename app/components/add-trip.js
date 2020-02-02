import Component from '@glimmer/component';
import Ember from 'ember';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default Ember.Component.extend({ 
    isReturningTravelModeAir : true,
    isDepartureTravelModeAir : true,

    store : Ember.inject.service('store'),

    actions:{ 
        toggleDepartureTravelModeAirDetails: function(value) {
        if(value === 'flight')
        {
            this.set('isDepartureTravelModeAir',true)
        }
        else
        {
            this.set('isDepartureTravelModeAir',false)
        }   
    },

    toggleReturningTravelModeAirDetails: function(value) {
        if(value === 'flight')
        {
            this.set('isReturningTravelModeAir',true)
        }
        else
        {
            this.set('isReturningTravelModeAir',false)
        }   
    },

    saveTrip: function() {
        var origin = document.getElementById("origin").value;
        var destination = document.getElementById("destination").value;
        var fromDate = document.getElementById("from-date").value;
        var toDate = document.getElementById("to-date").value;
        var departureTravelMode = document.querySelector('input[name="departure-travel-mode"]:checked').value
        var returningTravelMode = document.querySelector('input[name="returning-travel-mode"]:checked').value
        var departureFlightNumber = document.getElementById("departure-flight-number").value;
        var departureFlightCarrier = document.getElementById("departure-flight-carrier").value;
        var returningFlightCarrier = document.getElementById("returning-flight-carrier").value;
        var returningFlightNumber = document.getElementById("returning-flight-number").value;

        const newTrip = this.store.createRecord('trips', { arrivalTransport: returningTravelMode, 
                                                        departureTransport: departureTravelMode, 
                                                        destinationCity: destination, 
                                                        endDate: toDate, 
                                                        returningFlight: returningFlightNumber, 
                                                        returningFlightCarrier: returningFlightCarrier, 
                                                        sourceCity: origin, 
                                                        sourceFlight: departureFlightNumber, 
                                                        sourceFlightCarrier: departureFlightCarrier, 
                                                        startDate: fromDate});
        newTrip.save();
    }
}
});
