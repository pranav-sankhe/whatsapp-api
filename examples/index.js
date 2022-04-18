const chai = require('chai');
const assert = chai.assert;

const gupshupInstance = require('./../gupshup');
const gupshupAppName = 'SlateDist'


// gupshupInstance.optins.getUsers(gupshupAppName)
// .then(result => {
// 	assert.equal(result.status, 'success');

// 	let user_data_tmp = JSON.stringify(result);
// 	const fs = require('fs');
// 	fs.writeFileSync('user_data.json', user_data_tmp);
// 	done();
// })

const fs = require('fs');

let file_data = fs.readFileSync('/Users/sankhe/Documents/slate/api-test/user_data.json');
let user_data = JSON.parse(file_data);	

console.log(user_data);
for (let i = 0; i < 3; i++) {	
const messagePrefix = {
	channel : "whatsapp",
	source : "917834811114",
	destination : user_data.users[i].countryCode + user_data.users[i].phoneCode,
	'src.name': "SlateDist"
}

describe('MESSAGES', () => {

	it('Should be able to send template text message', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				isHSM: "true",
				type: "text",
				text: "Your cable bill is due by 30 April. Please click on gs.im/ask34RT to pay."
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)
})


}



// describe('USER OPTINS', () => {
// 	it('should be able to fetch optin users list', (done) => {
// 		gupshupInstance.optins.getUsers(gupshupAppName)
// 		.then(result => {
// 			assert.equal(result.status, 'success');
// 			// console.log(result);
// 			console.log(result.users[0].phoneCode);

// 			// console.log(result.status);
// 			done();
// 		})
// 		.catch(err => done(new Error(JSON.stringify(err))))
// 	}).timeout(5000)

	// it('should be able to send optin requests to users', (done) => {
	// 	gupshupInstance.optins.sendUserOptinRequest({
	// 		appName: gupshupAppName,
	// 		userMobileNumber: 918765534151
	// 	})
	// 	.then(result => {
	// 		assert.equal(result.status, '202');
	// 		done();
	// 	})
	// 	.catch(err => done(new Error(JSON.stringify(err))))
	// }).timeout(5000)

// })

