const stripeAPI = require('../stripeAPI')

const webHookHandlers = {
    'checkout.session.completed': (data) => {
        console.log('Checkout completed successfuly', data)
        //other business logic
    },

    'payment_intent.succeeded': (data) => {
      console.log('Payment succeeded', data)
    }, 
    'payment_intent.payment_failed': (data) => {
        console.log("payment failed", data)
    }
}


function webHook(req,res){
    const sig = req.headers['stripe-signature']
    let event;

    try{
        event = stripeAPI.webHook.constructEvent(
            req['rawBody'],
            sig,
            process.env.WEB_HOOK_SECRET)

    }catch(error){
         return res.status(400).send(`Webhook error ${error.message}`)
    }

    if(webHookHandlers[event.type]){
        webHookHandlers[event.type] (event.data.object)
    }
}

module.exports = webHook