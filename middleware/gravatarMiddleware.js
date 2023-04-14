const gravatar = require('gravatar');

const  gravatarMiddleware = async function (res, req, next){
    const avatarUrl = gravatar.url(res.body.email,{s: '100', r: 'x', d: 'retro'})
    res.body.avatarURL= avatarUrl
    next()
}

module.exports= gravatarMiddleware