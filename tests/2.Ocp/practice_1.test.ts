import { Circle, Rectangle, Triangle, Square, Shapes } from '../../Solid/2.Ocp/main';

describe('Shapes', () => {
    test('should calculate total area of shapes', () => {
        const shapes = [
            new Circle(5),
            new Rectangle(4, 5),
            new Triangle(3),
            new Square(4)
        ];

        const shapeCollection = new Shapes(shapes);
        const totalArea = shapeCollection.calculateArea();

        expect(totalArea).toBeCloseTo(119, 1); // Total area including all shapes
    });
});
