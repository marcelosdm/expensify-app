const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(2, 4);
  expect(result).toBe(6);
});

test('should generate greeting from name', () => {
  const greeting = generateGreeting('Vinícius');
  expect(greeting).toBe(`Hello Vinícius!`);
});

test('should generate greeting for no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anonymous!');
});
