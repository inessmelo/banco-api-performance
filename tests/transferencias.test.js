import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from "../helpers/autenticacao.js";

export const options = {
  iterations: 1
  //vus: 10,
  //duration: '30s',
};

export default function () {
  const token = obterToken()

  const url = 'http://localhost:3000/transferencias';
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
