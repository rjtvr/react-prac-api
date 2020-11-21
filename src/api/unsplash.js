import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID r19mPKLLoQ4mn7UNaxCUA6-252lpe9sEt2Lm2sL9X3U'
    }
})