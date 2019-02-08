	import Controller from '@ember/controller';
import { match,not} from '@ember/object/computed';

export default Controller.extend({
	responseMessage: null,

  	emailAddress: null,

  	isValid: match('emailAddress', /^.+@.+\..+$/),
  	isDisabled: not('isValid'),

  	actions: {

    saveInvitation() {
    	this._super(...arguments);
      	const email = this.get('emailAddress');

	    this.store.createRecord('invitation', { email }).save()
	    .then(response => {
	      	this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
	    }).catch((error) => {
	    	this.set('responseMessage', `Error ${error} ! `);
	    }).finally(() => {
		    this.set('emailAddress', null);
	    })

    }
  }

}); 
