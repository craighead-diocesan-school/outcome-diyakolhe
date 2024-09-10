import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";




export const actions = {
    sendEmail: async({request}) => {
        const formData = await request.formData ()
        const email = formData.get("to");
        const subject = formData.get("subject");
        const body = formData.get("body");




       let html = "<h2>Hi user!</h2><pre>${body}</pre>";

       const message = {
        from: GOOGLE_EMAIL,
        to: email,
        bcc:"hello@webjeda.com",
        subject: subject,
        text: body,
        html: html,
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