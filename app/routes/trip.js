import Route from '@ember/routing/route';

export default class TripRoute extends Route {
    model(params) {
        console.log(params);
        return this.store.findRecord('trips', params.id);
    }
}
