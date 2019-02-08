		import Ember from 'ember';

export default Ember.Controller.extend({

 isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
 isMessageEnoughLong: Ember.computed.gte('message.length', 5),
 emailAddress: '',
 text: '',
 isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

 actions: {

   saveInvite() {
     const email = this.get('emailAddress');
     const text = this.get('text');
     const newContact = this.store.createRecord('Contact', { email ,text});

     newContact.save().then(response => {
       this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
       this.set('emailAddress', '',);
       this.set('text','');
     });

   }
 }

});
