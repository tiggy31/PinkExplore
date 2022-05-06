const stripeAPI = require('../stripeAPI')


async function createSession(req,res){
    const domain = process.env.DOMAIN_URL
    const {line_items,customer_email} = req.body

    if(!line_items || !customer_email){
        return res.status(400).json({error: "missing session parameter"})
    }

    let session 

  try{
     session = await stripeAPI.checkout.sessions.create({
         payment_method_types: ['card'],
         mode: 'payment',
         line_items,
         customer_email,
         success_url: `${domain}/success?session_id={CHECKOUT_SESSION_ID}`,
         cancel_url: `${domain}/canceled`,
         shipping_address_collection: {
             allowed_countries:[
                'GB','US'
         ]
         }
     })

     res.status(200).json({sessionId: session.id})
  }catch(error){
      console.log(error)
      res.status(400).json({error: console.log('an error occured')})
  }
}

module.exports = createSession