/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

export class EmailService {
    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

export class SMSService {
    send(message: string): void {
        console.log(`Sending SMS with message: ${message}`);
    }
}

export class SendNotification {
    private notificationService: EmailService | SMSService;

    constructor(service: EmailService | SMSService) {
        this.notificationService = service;
    }

    sendNotification(message: string): void {
        this.notificationService.send(message);
    }
}

const emailService = new EmailService();
const emailNotification = new SendNotification(emailService);
emailNotification.sendNotification("Hello, this is an email notification!");

const smsService = new SMSService();
const smsNotification = new SendNotification(smsService);
smsNotification.sendNotification("Hello, this is an SMS notification!");