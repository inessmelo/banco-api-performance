import http from 'k6/http'
import { sleep, check } from 'k6'
import { pegarBaseURL } from '../utils/variaveis.js'
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))

export const options = {
    iterations: 40,
    //vus: 15,
    //duration: '30s',

    /*
    stages: [
        { duration: '5s', target: 10},
        { duration: '20s', target: 10},
        { duration: '5s', target: 0},
    ],

    thresholds: {
        http_req_duration: ['p(90)<3', 'p(95)<4']
    }
    */
}

export default function () {
    const url = pegarBaseURL() + '/login';
    const payload = JSON.stringify(postLogin)

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const resp = http.post(url, payload, params);

    check(resp, {
        'Validar o Status da resposta': (r) => r.status === 200,
        'Validar se o Token retorna string': (r) => typeof (r.json().token),
    })

    sleep(1)
}
