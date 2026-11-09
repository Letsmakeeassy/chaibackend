require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const githubData = {
    "login": "Letsmakeeassy",
    "id": 149934559,
    "node_id": "U_kgDOCO_R3w",
    "avatar_url": "https://avatars.githubusercontent.com/u/149934559?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Letsmakeeassy",
    "html_url": "https://github.com/Letsmakeeassy",
    "followers_url": "https://api.github.com/users/Letsmakeeassy/followers",
    "following_url": "https://api.github.com/users/Letsmakeeassy/following{/other_user}",
    "gists_url": "https://api.github.com/users/Letsmakeeassy/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Letsmakeeassy/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Letsmakeeassy/subscriptions",
    "organizations_url": "https://api.github.com/users/Letsmakeeassy/orgs",
    "repos_url": "https://api.github.com/users/Letsmakeeassy/repos",
    "events_url": "https://api.github.com/users/Letsmakeeassy/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Letsmakeeassy/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shubham Patel",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "i am comfortable with c, javascript and python",
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-11-05T09:27:54Z",
    "updated_at": "2026-11-09T06:30:46Z"
}

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/call', (req, res) => {
    res.send('hello from call request!')
})

app.get('/login', (req, res) => {
    res.send(`<h1>please login at the chai aur code</h1>`)
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${port}`)
})
