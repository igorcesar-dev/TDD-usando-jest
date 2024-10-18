const app = require("../app")

// Dentro do parâmetro é necessário colocar o que a função faz, e no segundo parâmetro é colocado o que a função deve retornar
// O padrão de escrita de testes é o seguinte: "Deve fazer x quando receber y"
test("Deve retornar o valor 10 ao somar 5 + 5", () => {
    let resultado = app.soma(5, 5);
    expect(resultado).toEqual(10);
})

test("Deve retornar o valor 10 ao multiplicar 2 * 5", () => {
    let resultado = app.multiplicar(2, 5);
    expect(resultado).toEqual(10);
})