import http from 'k6/http';
import { sleep, check } from 'k6';
import { pegarBaseURL } from "../utils/variaveis.js"
import { obterToken } from "../helpers/autenticacao.js";

export const options = {
  iterations: 1
  //vus: 10,
  //duration: '30s',

  /*
  stages: [
    { duration: '5s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '5s', target: 0 },
  ],

  thresholds: {
    http_req_duration: ['p(90)<3', 'p(95)<4']
  }
  */
};

export default function () {
  const token = obterToken()

  const url = pegarBaseURL() + '/transferencias';
  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 235,
    token: "string"
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  }

  const resp = http.post(url, payload, params);

  check(resp, {
    'Validar o Status 201 da resposta': (r) => r.status === 201,
    'Validar se o Token retorna string': (r) => typeof (r.json().token),
  })

  sleep(1);
}
