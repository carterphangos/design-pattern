import { CreditCardPayment, PayPalPayment, CashPayment, handlePayment } from '../../Solid/3.Lsp/main';

describe('Payment Processing', () => {
    let creditCardPayment: CreditCardPayment;
    let payPalPayment: PayPalPayment;
    let cashPayment: CashPayment;

    beforeEach(() => {
        creditCardPayment = new CreditCardPayment();
        payPalPayment = new PayPalPayment();
        cashPayment = new CashPayment();
    });

    test('should process credit card payment', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        handlePayment(creditCardPayment, 100);
        expect(consoleSpy).toHaveBeenCalledWith("Processing credit card payment of $100");
        expect(consoleSpy).toHaveBeenCalledWith("Validating credit card details...");
        expect(consoleSpy).toHaveBeenCalledWith("Charging the credit card...");
        consoleSpy.mockRestore();
    });

    test('should process PayPal payment', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        handlePayment(payPalPayment, 200);
        expect(consoleSpy).toHaveBeenCalledWith("Processing PayPal payment of $200");
        expect(consoleSpy).toHaveBeenCalledWith("Redirecting to PayPal...");
        expect(consoleSpy).toHaveBeenCalledWith("Completing PayPal transaction...");
        consoleSpy.mockRestore();
    });

    test('should process cash payment', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        handlePayment(cashPayment, 50);
        expect(consoleSpy).toHaveBeenCalledWith("Processing cash payment of $50");
        expect(() => cashPayment.processPayment(50)).toThrowError("Cannot process cash payment online!");
        consoleSpy.mockRestore();
    });
});
