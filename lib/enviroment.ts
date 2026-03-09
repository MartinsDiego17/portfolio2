const env = process.env;

export const enviroment = {
    contact: {
        emailServiceId: env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        emailTemplateId: env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        emailApiKey: env.NEXT_PUBLIC_EMAIL_API_KEY
    }
}