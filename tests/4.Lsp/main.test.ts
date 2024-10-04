import { Printer, Scanner, FaxMachine, MultiFunctionMachine } from '../../Solid/4.Lsp/main';

describe('Machine Functionalities', () => {
    let printer: Printer;
    let scanner: Scanner;
    let faxMachine: FaxMachine;
    let multiFunctionMachine: MultiFunctionMachine;

    beforeEach(() => {
        printer = new Printer();
        scanner = new Scanner();
        faxMachine = new FaxMachine();
        multiFunctionMachine = new MultiFunctionMachine();
    });

    test('should print a document', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        printer.print("Document 1");
        expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 1");
        consoleSpy.mockRestore();
    });

    test('should scan a document', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        multiFunctionMachine.scan("Document 2");
        expect(consoleSpy).toHaveBeenCalledWith("Scanning document: Document 2");
        consoleSpy.mockRestore();
    });

    test('should fax a document', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        multiFunctionMachine.fax("Document 3");
        expect(consoleSpy).toHaveBeenCalledWith("Faxing document: Document 3");
        consoleSpy.mockRestore();
    });
});
