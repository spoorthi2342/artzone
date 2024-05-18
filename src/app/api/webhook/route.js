
import { Stripe } from "@/app/utils/Stripe";
import { revalidatePath } from "next/cache";
export async function POST(req,res){
    const body= await req.text()
    const sig=req.headers.get('stripe-signature')
    const webhooksecret=process.env.WEBHOOK_SECRET
    let event;

  try {
    event = Stripe.webhooks.constructEvent(body, sig, webhooksecret);
  } catch (err) {
    console.log("ERROR MESSGE",err.message)
    return Response.json({error:`webhook error:${err.message}`} ,{status:400})
    
  }
  if(event.type == 'product.created'||event.type == 'product.updated'){
    console.log('event type',event.type)
    revalidatePath('../../Product', 'page')
  }
  else{
    console.log(`Unhandled Event Type  ${event.type}`)
  }
  return Response.json({message:"success"})
}