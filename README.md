# API de CRUD de Usuários

## Como Instalar e Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/JoaoLima98/seu-repositorio.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd seu-repositorio
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a string de conexão do MongoDB e outras variáveis necessárias, como no exemplo abaixo:
     ```
     DATABASE_URL="mongodb+srv://seu-usuario:senha@seu-cluster.mongodb.net/nome-do-banco"
     ```

5. **Execute as migrações do Prisma**:
   ```bash
   npx prisma migrate dev
   ```

6. **Inicie o servidor**:
   ```bash
   npm start
   ```

7. **A API estará disponível em**: 
   - `http://localhost:3000` (ou na porta especificada no seu código).
