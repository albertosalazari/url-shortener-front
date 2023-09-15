import ky from 'ky';

export const api = ky.create({
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('Content-Type', 'application/json');
      },
    ],
  },
  prefixUrl: 'http://localhost:8080',
});
