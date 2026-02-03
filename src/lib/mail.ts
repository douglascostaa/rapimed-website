import { mailConfig } from "@/config/mail";

interface MailData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    [key: string]: string | undefined; // Allow additional fields like city, etc.
}

type MailType = keyof typeof mailConfig;

/**
 * Simulates sending an email.
 * Replace this implementation with your actual Email Service Provider (EmailJS, Resend, etc.)
 */
export async function sendMail(type: MailType, data: MailData): Promise<boolean> {
    const config = mailConfig[type];

    // Artificial delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would implement the actual API call
    console.group("📧 Mock Email Send");
    console.log(`To: ${config.to}`);
    console.log(`Subject: ${config.subjectPrefix} New message from ${data.name}`);
    console.log("Body:", data);
    console.groupEnd();

    // Verify if we should assume success (basically always true for mock)
    return true;
}
