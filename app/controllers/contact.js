		import Controller from '@ember/controller';
	import { match, not } from '@ember/object/computed';
	import { empty } from '@ember/object/computed';



export default Controller.extend({

  emailAddress: '',
  text:'',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),
  actions: {

    saveInvite() {
      const email = this.get('emailAddress');
      const text=this.get('text');

      const newcontact = this.store.createRecord('contact', { email ,text});

      newcontact.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('text', '');
      });
    }
  }


});