# 🧪 Testes de Performance — Banco API (K6)

Repositório de scripts e configurações para execução de testes de performance da **Banco API**, utilizando a ferramenta [K6](https://k6.io/) com scripts em **JavaScript (ES6)**.

📍 Repositório original: [inessmelo/banco-api-performance](https://github.com/inessmelo/banco-api-performance)

---

## 🧭 Introdução

O objetivo deste projeto é realizar testes de performance e carga da API do Banco, medindo **tempo de resposta**, **taxa de requisições**, **erros** e **comportamento sob diferentes níveis de carga**.

Os testes são escritos em **JavaScript**, executados pelo **K6**, e organizados para facilitar a manutenção e a análise de resultados.  
A execução pode ser feita localmente ou integrada em pipelines de CI/CD.

---

## ⚙️ Tecnologias Utilizadas

- **[K6](https://k6.io/)** — Ferramenta open-source para testes de performance e carga  
- **JavaScript (ES6)** — Linguagem usada para escrever os scripts de teste  
- **Node.js (opcional)** — Para instalação e execução auxiliar de dependências  
- **Git** — Controle de versão  
- **Dashboard Web do K6** — Para visualização em tempo real e exportação dos relatórios de execução  

---

## 📂 Estrutura do Repositório

banco-api-performance/  
├── tests/  
│ └── login.test.js/  
│ └── trasnferencia.test.js  
│ 
├── helpers   
│ └── autenticacao.js  
│  
├── utils/  
│ └── variaveis.js  
│  
├── results/  
│ └── html-report.html  
│  
├── fixtures  
├── postLogin.json  
│  
├── config  
├── enviorenment.json 
└── README.md  


---

## 🎯 Objetivo de Cada Grupo de Arquivos

| Diretório / Arquivo | Descrição |
|----------------------|------------|
| **`tests/`** | Diretorio onde estão os teste de performance. |
| **`login.test.js`** | Arquivo de teste da API de Login |
| **`transferencias.test.js`** | Arquivo de teste da API de Transferencia |
| **`helpers/`** | Diretório de autenticação do teste de perfomance dos arquivos de teste |
| **`autenticacao.js/`** | Arquivo em JavaScript para a autenticação dos testes contidos no diretorio de teste |
| **`fixtures/`** | Diretório onde o arquivo do login dos dados de login está localizado. |
| **`postLogin/`** | Arquivo em JSON com a massa de teste do Login. |
| **`utils/`** | Funções auxiliares e configurações usadas nos scripts de teste. |
| **`variaveis.js`** | Exemplo de variáveis de ambiente necessárias para execução. |
| **`config/`** | Diretório onde são armazenados as variaveis de ambiente de todo repositorio. |
| **`enviorenment.json/`** | Arquivos em JSON das variveis de ambiente dos testes de performance para a execução dos testes. |

---

## 🛠️ Instalação e Configuração

### 1. Clonar o repositório

```bash
git clone https://github.com/inessmelo/banco-api-performance.git
cd banco-api-performance
```

### 2. Instalar o K6

macOS: brew install k6
Windows (choco): choco install k6
Linux (apt):

```bash
sudo apt update
sudo apt install k6
```

### 3. Configurar variáveis de ambiente

O K6 precisa saber a URL base da API que será testada.
Crie um arquivo .env (ou exporte diretamente no terminal):

```bash
export BASE_URL=https://sua-api.com
```

## 🚀 Execução dos Testes
### 1. Execução básica  

```bash
k6 run tests/login.test.js
```

### 2. Passando a variável de ambiente BASE_URL 

```bash
k6 run tests/login.test.js -e BASE_URL=https://sua-api.com
```

### 3. Execução com dashboard em tempo real e exportação de relatório

O K6 permite acompanhar a execução em tempo real via dashboard local e exportar o relatório final em HTML.

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=results/html-report.html \
k6 run tests/login.test.js \
BASE_URL=https://sua-api.com \
```

- O dashboard será exibido no navegador em http://localhost:3000 durante a execução.
- O relatório HTML será salvo em html-report.html ao final do teste.

## 📊 Relatórios e Métricas

- Os resultados podem ser visualizados de três formas:
- Console: métricas em tempo real no terminal;
- Dashboard Web: interface interativa em tempo real (K6_WEB_DASHBOARD=true);
- Relatório HTML: exportado automaticamente com K6_WEB_DASHBOARD_EXPORT.

## 📚 Referências

- [Documentação oficial do K6](https://k6.io/docs/)
- [K6 Web Dashboard](https://k6.io/docs/results-visualization/web-dashboard/)
- [Guia de variáveis de ambiente no K6](https://k6.io/docs/using-k6/environment-variables/)


