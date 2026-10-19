constante teste - exigir('node:test');
constante afirmar = exigir('node:assert/strict'); 

teste('A aplicação deve realizar uma soma', () => {
constante resultado - 5 + 3;
afirmar.igual (resultado, 8); 
});
