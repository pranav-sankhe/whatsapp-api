"use strict";

import Axios from 'axios'
import { API_URL, normalizeError } from './helpers/constants'

export default class API {
	client: any

	constructor(options: { apiKey: string }) {
		this.client = Axios.create({
			baseURL: API_URL,
			headers: Object.assign(
				{
					accept: 'application/json, text/plain, */*',
					apiKey: options.apiKey,
					'Content-Type': 'application/x-www-form-urlencoded',
					'Cache-Control': 'no-cache',
					Authorization: options.apiKey
				}
			)
		});
	}

	async get(params: { url: string }) {
		try {
			const { data } = await this.client.get(params.url);
			return data;
		} catch (error) {
			return normalizeError(error);
		}
	}
	
	async post(params: { url: string, data: object }) {
		try {
			return await this.client.post(params.url, params.data);
		} catch (error) {
			return normalizeError(error);
		}
	}
}