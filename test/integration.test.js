const request = require('supertest');
const app = require('../index');

describe('Integration Test', () => {
    it('The endpoint should returns 200', async () => {
        await request(app)
            .get('/flyDev/ditto')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200);
    })

    it('The endpoint should returns 404', async () => {
        await request(app)
            .get('/flyDev/ttodi')
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(404);
    })
});