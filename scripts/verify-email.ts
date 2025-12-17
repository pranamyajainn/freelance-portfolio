
import { Resend } from 'resend';

// Hardcoded for verification script only - preventing env var issues during test
const RESEND_API_KEY = 're_9DbgAiVY_7Ex5bHEXp7HfC58CZZSEeL2a';
const TO_EMAIL = 'pranamyajeet@gmail.com';
const FROM_EMAIL = 'Pranamya Portfolio <contact@pranamya.tech>';

async function main() {
    console.log(`Attempting to send email...`);
    console.log(`From: ${FROM_EMAIL}`);
    console.log(`To: ${TO_EMAIL}`);

    const resend = new Resend(RESEND_API_KEY);

    try {
        const data = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: 'Verification: Portfolio Email Update',
            html: `
        <h1>Email Configuration Verified</h1>
        <p>This is a test email sent from <strong>${FROM_EMAIL}</strong>.</p>
        <p>If you are reading this, the domain verification is complete and the sender address is authorized.</p>
      `,
        });

        if (data.error) {
            console.error('Resend API returned error:', data.error);
            process.exit(1);
        }

        console.log('Success! Email sent.');
        console.log('ID:', data.data?.id);
    } catch (error) {
        console.error('Failed to send email:', error);
        process.exit(1);
    }
}

main();
