import Ember from 'ember';
import Changeset from 'ember-changeset';

export default Ember.Component.extend({
  myObj: undefined,

  init() {
    this._super(...arguments);
    this.set("myObj", { value: "init value"});

    this.set("myObject", new Changeset(this.get("myObj")));
    this.set("myObject2", new Changeset(this.get("myObj")));
  },

  actions: {
    confirm() {
      this.get("myObject").save();
    },

    changeValue() {
      this.get("myObject").set("value", "new value");
    }
  }
});
