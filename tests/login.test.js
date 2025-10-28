import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    iterations: 1,
    thresholds: {
        http_req_duration: ['p(90)<3', 'p(95)<4']
    }
}

export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: "ines.melo",
        senha: "123456"
    })

    const params = {
        
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = http.post(url, payload, params);

    check (response, {
        'Validar o Status da resposta': (r) => r.status === 200,
        'Validar se o Token retorna string': (r) => typeof(r.json().token),
    })

    sleep (1)
}
