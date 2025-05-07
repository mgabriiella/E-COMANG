const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const moradorRoutes = require('./src/routes/moradorRoutes');
const estacaoRoutes = require('./src/routes/estacaoRoutes');
const residuoRoutes = require('./src/routes/residuoRoutes');
const enderecoRoutes = require('./src/routes/enderecoRoutes');
const tipoResiduoRoutes = require('./src/routes/tipoResiduoRoutes');
const empresaRoutes = require('./src/routes/empresaRoutes');
const coletorRoutes = require('./src/routes/coletorRoutes');
const beneficioRoutes = require('./src/routes/beneficioRoutes');
const historicoDescarteRoutes = require('./src/routes/historicoDescarteRoutes');
const resgataBeneficioRoutes = require('./src/routes/resgataBeneficioRoutes');
const coletaRoutes = require('./src/routes/coletaRoutes');

// Carregar variáveis de ambiente
dotenv.config({ path: __dirname + '/.env' });

// Adicionar logs para depuração
console.log('Environment Variables Loaded:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('PORT:', process.env.PORT);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Registrar as rotas
app.use('/api/moradores', moradorRoutes);
app.use('/api/estacoes', estacaoRoutes);
app.use('/api/residuos', residuoRoutes);
app.use('/api/enderecos', enderecoRoutes);
app.use('/api/tipo-residuos', tipoResiduoRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/coletors', coletorRoutes);
app.use('/api/beneficios', beneficioRoutes);
app.use('/api/historico-descartes', historicoDescarteRoutes);
app.use('/api/resgata-beneficios', resgataBeneficioRoutes);
app.use('/api/coletas', coletaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});