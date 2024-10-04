import { EmailService, SMSService, SendNotification } from '../../Solid/5.Dip/main';

describe('Notification Services', () => {
    let emailService: EmailService;
    let smsService: SMSService;
    let emailNotification: SendNotification;
    let smsNotification: SendNotification;

    beforeEach(() => {
        emailService = new EmailService();
        smsService = new SMSService();
        emailNotification = new SendNotification(emailService);
        smsNotification = new SendNotification(smsService);
    });

    test('should send an email notification', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        emailNotification.sendNotification("Test email message");
        expect(consoleSpy).toHaveBeenCalledWith("Sending email with message: Test email message");
        consoleSpy.mockRestore();
    });

    test('should send an SMS notification', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        smsNotification.sendNotification("Test SMS message");
        expect(consoleSpy).toHaveBeenCalledWith("Sending SMS with message: Test SMS message");
        consoleSpy.mockRestore();
    });
});
