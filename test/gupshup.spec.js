'use strict'

const chai = require('chai')
const assert = chai.assert
const Gupshup = require('../dist/gupshup')

describe('GUPSHUP INITIALIZATION', () => {
	it('Validation for apiKey', () => {
		try {
			new Gupshup()
		} catch (e) {
			assert.equal(e.message, '`apiKey` is mandatory')
		}
	})

	it('instance should initialize', () => {
		let client = new Gupshup({
			apiKey: '7xmg3tqywcefckfeybypf4s380melzg6',
		})

		assert.equal(client.apiKey, '7xmg3tqywcefckfeybypf4s380melzg6')
	})
})