import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";




export const actions = {
    sendEmail: async({request}) => {
        const formData = await request.formData ()
        const email = formData.get("to");
        const subject = formData.get("subject");
        const body = formData.get("body");
        const name = formData.get("name");
        const method = formData.get("method");
        const payment = formData.get("payment");
        const phone = formData.get("phone");
        const emailAddress = formData.get("email");
        const other = formData.get("other");




       let html = ""

       const message = {
        from: GOOGLE_EMAIL,
        to: email,
        subject: "NEW ORDER",
        text: body + " " + name + " " + phone + " " + emailAddress + " " + other + " " +method + " " + payment,
        html: body + " " + name + " " + phone + " " + emailAddress + " " + other + " " +method + " " + payment,
       };

       const sendEmail = async (message) => {
        await new Promise((resolve, reject) => {
            transporter.sendMail(message,
                (err, info) => {
                    if (err) {
                        console.error(err);
                    } else {
                        resolve (info);
                    }
                });
        });
       };

       await sendEmail(message);

       return {
        success: "Email is sent",
       };
       }
    }