const { getPokemons } = require('../controller/pokeController');
const pokeMock = require('./mocks/pokeMock');
const httpMocks = require("node-mocks-http");

describe("Unit Test", () => {
    beforeEach(() => {
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
    })

    it("Get Pokemon FindByName and returns 200", async () => {
        req.params.name = "ditto";
        await getPokemons(req, res);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(pokeMock);
        expect(res._isEndCalled()).toBeTruthy();
    });
    
    it("Get Pokemon FindByName Not Found and returns 404", async () => { 
        req.params.name = "ttodi";
        await getPokemons(req, res);
        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toStrictEqual({ message: "Not Found" });
        expect(res._isEndCalled()).toBeTruthy();
    });
});