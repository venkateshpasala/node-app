let request = require("supertest");
let app = require("../index.js");


describe("GET /", function() {
    it("This is first jenkins test", function(done) {
        request(app).get("/").expect("Welcome to Jenkins CI and CD", done);
    });
});