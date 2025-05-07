# Backend de Sistema com API RESTful

## Descrição do Projeto

Este projeto é um backend desenvolvido para demonstrar o setup de um aplicativo com uma API RESTful CRUD, utilizando a arquitetura MVC (Model-View-Controller). Ele foi construído com **Node.js**, **Express.js** e **MySQL**, e inclui a configuração do banco de dados e exemplos de operações CRUD (Create, Read, Update, Delete) para gerenciar entidades como moradores, resíduos, estações, empresas, coletores, benefícios e coletas. O objetivo é fornecer uma base técnica para um sistema que pode ser expandido conforme necessário, com boas práticas de desenvolvimento e organização de código.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de que os seguintes itens estão instalados no seu sistema:

- **Node.js** (versão 16 ou superior): [Baixe e instale o Node.js](https://nodejs.org/)
- **MySQL** (versão 8 ou superior): [Baixe e instale o MySQL](https://dev.mysql.com/downloads/)
- **Postman**: Para testar os endpoints da API [Baixe o Postman](https://www.postman.com/downloads/)
- Um editor de código como **VS Code** (opcional, mas recomendado)

## Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto na sua máquina local.

### 1. Clone o Repositório

Clone este repositório para sua máquina local usando:

```bash
git clone <url-do-repositorio>
cd app
```

### 2. Instale as Dependências

O projeto utiliza o **npm** para gerenciar pacotes. Instale todas as dependências necessárias com:

```bash
npm install
```

Isso instalará as seguintes dependências listadas no `package.json`:
- `express`: Para construir a API RESTful.
- `mysql2`: Para conectar ao banco de dados MySQL.
- `dotenv`: Para gerenciar variáveis de ambiente.
- `nodemon` (dependência de desenvolvimento): Para reiniciar o servidor automaticamente durante o desenvolvimento.

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz do projeto (no mesmo nível do `server.js`) para armazenar suas variáveis de ambiente. Use o seguinte modelo:

```plaintext
# .env
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=app
DB_PORT=3306
PORT=3000
```

- Substitua `seu_usuario_mysql` e `sua_senha_mysql` pelas credenciais do seu MySQL.
- `DB_NAME` deve ser `app` (nome do banco que você criou).
- `PORT` é a porta onde a aplicação será executada (padrão: 3000).

### 4. Adicione o `.env` ao `.gitignore`

Para evitar que informações sensíveis (como credenciais do banco) sejam enviadas ao repositório Git, adicione o arquivo `.env` ao `.gitignore`. Se ainda não tiver um arquivo `.gitignore`, crie um no diretório raiz:

```bash
touch .gitignore
```

Abra o arquivo `.gitignore` e adicione a seguinte linha:

```plaintext
.env
```

Se o arquivo `.env` já foi commitado anteriormente, remova-o do controle de versão sem deletá-lo localmente:

```bash
git rm -r --cached .env
git add .gitignore
git commit -m "Adiciona .env ao .gitignore e remove .env do rastreamento"
git push origin main
```

Agora, o arquivo `.env` não será mais rastreado pelo Git.

### 5. Configure o Banco de Dados MySQL

O banco de dados para este projeto já foi criado com o nome `app`. Siga os passos abaixo para configurar o esquema e os dados iniciais do banco.

#### 5.1. Conecte-se ao MySQL

Faça login no seu servidor MySQL usando a linha de comando ou uma ferramenta gráfica como phpMyAdmin ou MySQL Workbench:

```bash
mysql -u seu_usuario_mysql -p
```

Digite sua senha quando solicitado.

#### 5.2. Crie o Banco de Dados (se ainda não criado)

Você mencionou que já criou o banco de dados chamado `app`. Caso ainda não tenha feito isso, crie-o com:

```sql
CREATE DATABASE app;
```

#### 5.3. Use o Banco de Dados

Mude para o banco `app`:

```sql
USE app;
```

#### 5.4. Execute o Script DDL

Execute o script `DDL.sql` para criar as tabelas. Você pode copiar o conteúdo do `DDL.sql` e colar no seu cliente MySQL, ou executar o arquivo diretamente:

```bash
mysql -u seu_usuario_mysql -p app < DDL.sql
```

Isso criará as seguintes tabelas:
- `ENDEREÇO`
- `TIPO_RESÍDUO`
- `MORADOR`
- `ESTAÇÃO`
- `EMPRESA`
- `COLETOR`
- `BENEFÍCIO`
- `RESÍDUO`
- `HISTÓRICO_DESCARTE`
- `RESGATA_BENEFÍCIO`
- `COLETA`

#### 5.5. Execute o Script DML

Execute o script `DML.sql` para inserir os dados iniciais nas tabelas:

```bash
mysql -u seu_usuario_mysql -p app < DML.sql
```

Isso preencherá as tabelas com dados iniciais (ex.: endereços, tipos de resíduos, moradores, etc.).

#### 5.6. (Opcional) Execute o Script DQL

O script `DQL.sql` contém consultas para relatórios. Você pode executá-lo para testar os dados:

```bash
mysql -u seu_usuario_mysql -p app < DQL.sql
```

### 6. Inicie a Aplicação

Com as dependências instaladas e o banco de dados configurado, você pode iniciar a aplicação.

#### 6.1. Execute em Modo de Desenvolvimento

Use o `nodemon` para executar a aplicação em modo de desenvolvimento (reinicia automaticamente ao alterar arquivos):

```bash
npm run dev
```

#### 6.2. Execute em Modo de Produção

Para executar a aplicação em modo de produção:

```bash
npm start
```

O servidor será iniciado na porta especificada no arquivo `.env` (padrão: `3000`). Você verá a seguinte mensagem no terminal:

```
Server running on port 3000
```

### 7. Teste a API com o Postman

Você pode testar os endpoints da API usando o Postman. Abaixo estão exemplos de requisições para alguns endpoints principais. Certifique-se de que o servidor está rodando antes de fazer as requisições.

#### 7.1. Criar um Registro de Resíduo (`POST /api/residuos`)

- **URL**: `http://localhost:3000/api/residuos`
- **Método**: `POST`
- **Cabeçalhos**:
  - `Content-Type: application/json`
- **Corpo** (raw, JSON):
  ```json
  {
    "Data_Descarte": "2025-05-07",
    "Peso": 15.00,
    "Pontos_Acumulados": 50.00,
    "Usuário_ID": 1,
    "Estação_ID": 1,
    "Tipo_Resíduo_ID": 1
  }
  ```
- **Resposta Esperada**:
  - Status: `201 Created`
  - Corpo:
    ```json
    {
      "ID": 11,
      "Data_Descarte": "2025-05-07",
      "Peso": 15.00,
      "Pontos_Acumulados": 50.00,
      "Usuário_ID": 1,
      "Estação_ID": 1,
      "Tipo_Resíduo_ID": 1
    }
    ```

#### 7.2. Criar um Coletor (`POST /api/coletors`)

- **URL**: `http://localhost:3000/api/coletors`
- **Método**: `POST`
- **Cabeçalhos**:
  - `Content-Type: application/json`
- **Corpo** (raw, JSON):
  ```json
  {
    "Nome": "Carlos Almeida",
    "CPF_CNPJ": "12345678901",
    "Capacidade_Kg": 500.00,
    "Empresa_ID": 1
  }
  ```
- **Resposta Esperada**:
  - Status: `201 Created`
  - Corpo:
    ```json
    {
      "ID": 1,
      "Nome": "Carlos Almeida",
      "CPF_CNPJ": "12345678901",
      "Capacidade_Kg": 500.00,
      "Empresa_ID": 1
    }
    ```

#### 7.3. Resgatar um Benefício (`POST /api/resgata-beneficios`)

- **URL**: `http://localhost:3000/api/resgata-beneficios`
- **Método**: `POST`
- **Cabeçalhos**:
  - `Content-Type: application/json`
- **Corpo** (raw, JSON):
  ```json
  {
    "Data_Resgate": "2025-05-07",
    "Usuário_ID": 1,
    "Benefício_ID": 1
  }
  ```
- **Resposta Esperada**:
  - Status: `201 Created`
  - Corpo:
    ```json
    {
      "ID": 1,
      "Data_Resgate": "2025-05-07",
      "Usuário_ID": 1,
      "Benefício_ID": 1
    }
    ```

#### 7.4. Agendar uma Coleta (`POST /api/coletas`)

- **URL**: `http://localhost:3000/api/coletas`
- **Método**: `POST`
- **Cabeçalhos**:
  - `Content-Type: application/json`
- **Corpo** (raw, JSON):
  ```json
  {
    "Data_Hora_Recolhimento": "2025-05-09 10:00:00",
    "Status_Coleta": "Agendada",
    "Coletor_ID": 1,
    "Empresa_ID": 1
  }
  ```
- **Resposta Esperada**:
  - Status: `201 Created`
  - Corpo:
    ```json
    {
      "ID": 1,
      "Data_Hora_Recolhimento": "2025-05-09 10:00:00",
      "Status_Coleta": "Agendada",
      "Coletor_ID": 1,
      "Empresa_ID": 1
    }
    ```

#### 7.5. Listar Todas as Coletas (`GET /api/coletas`)

- **URL**: `http://localhost:3000/api/coletas`
- **Método**: `GET`
- **Resposta Esperada**:
  - Status: `200 OK`
  - Corpo:
    ```json
    [
      {
        "ID": 1,
        "Data_Hora_Recolhimento": "2025-05-09 10:00:00",
        "Status_Coleta": "Agendada",
        "Coletor_ID": 1,
        "Empresa_ID": 1
      }
    ]
    ```

### 8. Solução de Problemas

- **Erro: "Não foi possível conectar ao banco de dados"**
  - Certifique-se de que o MySQL está rodando na sua máquina.
  - Verifique se as credenciais no arquivo `.env` (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`) estão corretas.
- **Erro: "Tabela não existe"**
  - Confirme que você executou o script `DDL.sql` para criar as tabelas.
- **Erro 400 em Requisições POST**
  - Verifique se todos os campos obrigatórios estão presentes no corpo da requisição e se os tipos de dados correspondem ao esquema (ex.: `Data_Hora_Recolhimento` deve estar no formato `YYYY-MM-DD HH:MM:SS`).
- **Erro 500 em Requisições POST**
  - Verifique os logs no terminal para mais detalhes. Problemas comuns incluem falhas de restrição de chave estrangeira (ex.: `Coletor_ID` ou `Empresa_ID` não existe). Confirme que os registros referenciados existem:
    ```sql
    SELECT * FROM app.COLETOR WHERE ID = 1;
    SELECT * FROM app.EMPRESA WHERE ID = 1;
    ```

### 9. Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
app/
├── src/
│   ├── config/
│   │   └── db.js              # Configuração da conexão com o banco de dados
│   ├── models/                # Modelos para interação com o banco de dados
│   │   ├── residuosModel.js
│   │   ├── tipoResiduoModel.js
│   │   ├── empresaModel.js
│   │   ├── coletorModel.js
│   │   ├── resgataBeneficioModel.js
│   │   └── coletaModel.js
│   ├── routes/                # Rotas da API (Controladores)
│   │   ├── residuoRoutes.js
│   │   ├── tipoResiduoRoutes.js
│   │   ├── empresaRoutes.js
│   │   ├── coletorRoutes.js
│   │   ├── resgataBeneficioRoutes.js
│   │   └── coletaRoutes.js
│   ├── scripts/
│   │   └── setupDB.js         # Script para configurar o banco de dados (se aplicável)
├── server.js                  # Ponto de entrada da aplicação
├── .env                       # Variáveis de ambiente (não rastreado pelo Git)
├── .gitignore                 # Arquivo de ignorados pelo Git
├── package.json               # Dependências e scripts do projeto
├── DDL.sql                    # Script de criação do esquema do banco de dados
├── DML.sql                    # Script de dados iniciais do banco de dados
└── DQL.sql                    # Script de consultas para relatórios
```
