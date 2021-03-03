const core = require('@actions/core')
const axios = require('axios')

const api_key = core.getInput('api_key', { required: true })
const book_slug = core.getInput('book_slug', { required: true })

const instanceConfig = {
    baseURL: `https://leanpub.com/${book_slug}`,
    timeout: 5000
}
const instance = axios.create(instanceConfig)

const payload = `api_key=${api_key}`

core.debug(`Leanpub preview URL base: ${instanceConfig.baseURL}`)
core.debug(`payload: ${payload}`)

instance.post('/preview.json', payload)
