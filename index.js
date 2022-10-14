export default {
	fetch() {
		return new Response('Hello Class!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
