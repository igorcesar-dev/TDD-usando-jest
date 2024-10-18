let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);

test("A aplicação deve responder na porta 3131", async () => {
    return request.get("/").then((response) => {
        expect(response.statusCode).toEqual(200);
    });
});

test("Deve retornar true se idade for menor que 18 anos", async () => {
    return request.get("/pessoa/17").then((response) => {
        expect(response.body.menor).toEqual(true);
    })
})