/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface PaymentProcessor {
    processPayment(amount: number): void;
}

export class CreditCardPayment implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
        console.log("Validating credit card details...");
        console.log("Charging the credit card...");
    }
}

export class PayPalPayment implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
        console.log("Redirecting to PayPal...");
        console.log("Completing PayPal transaction...");
    }
}

export class CashPayment implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing cash payment of $${amount}`);
        throw new Error("Cannot process cash payment online!");
    }
}

export function handlePayment(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50); // Output: Error: Cannot process cash payment online!
