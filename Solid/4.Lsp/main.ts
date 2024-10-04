/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

export class Printer {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }
}

export class Scanner {
    scan(document: string): void {
        console.log(`Scanning document: ${document}`);
    }
}

export class FaxMachine {
    fax(document: string): void {
        console.log(`Faxing document: ${document}`);
    }
}

export class MultiFunctionMachine extends Printer {
    private scanner: Scanner;
    private faxMachine: FaxMachine;

    constructor() {
        super();
        this.scanner = new Scanner();
        this.faxMachine = new FaxMachine();
    }

    scan(document: string): void {
        this.scanner.scan(document);
    }

    fax(document: string): void {
        this.faxMachine.fax(document);
    }
}

const printer = new Printer();
printer.print("Document 1");

const multiFunctionMachine = new MultiFunctionMachine();
multiFunctionMachine.print("Document 2");
multiFunctionMachine.scan("Document 3");
multiFunctionMachine.fax("Document 4");
