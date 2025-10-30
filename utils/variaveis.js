const configLocal = JSON.parse(open('../config/enviorenment.json'))

export function pegarBaseURL() {
    return __ENV.BASE_URL || configLocal.baseURL
}