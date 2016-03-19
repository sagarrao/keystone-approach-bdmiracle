var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Email Model
 * ==================
 */


var EMail = new keystone.List('EMail', {
	autokey: { from: 'emails', path: 'days', unique: true }
});

EMail.add({
	day: { type: Types.Select, required: true,label:'Day #',initial: true,options: Array.from({length: 66}, (v, k) => k + 1)},
	Subject: {type: Types.Text, initial: true, required: true},
	Body:{type:Types.Textarea,initial: true, required: true}
});

EMail.defaultColumns = 'day';
EMail.register();
