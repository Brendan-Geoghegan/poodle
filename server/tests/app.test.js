const request = require('supertest');
const app = require('../app');

describe("API server", () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Example app listening on port 5000`)
        })
    })

    afterAll((done) => {
        console.log("gracefully stopping test server");
        api.close(done);
    })

    it('responds to get / with a status of 200 and woof', (done) => {
        request(api).get('/').expect(200).expect("woof", done);
    })

    it('retrieves all dogs', (done) => {
        request(api).get('/dogs').expect(200, done);
    })

    it('retrieves a specific breed', (done) => {
        request(api).get('/dogs/breed/Poodle').expect(200)
        .expect({
            id: 5,
            breed: "Poodle",
            link: "https://en.wikipedia.org/wiki/Poodle",
            attributes: ["small", "short-haired", "loud", "grumpy"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/1024px-Full_attention_%288067543690%29.jpg"
        }, done)
    })

})
