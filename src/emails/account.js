const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'julia.pacheco@polygon.pt',
        subject:'Welcome to Jus Task App',
        text: `Welcome ${name}, thanks for using the Jus Task App!`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'julia.pacheco@polygon.pt',
        subject:'Goodbye!',
        text: `Bye bye ${name}! It was nice having you around...`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}


