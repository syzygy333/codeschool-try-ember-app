import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: 1, name: 'Nate' },
      { id: 2, name: 'Gregg' }
    ];
  }
});
