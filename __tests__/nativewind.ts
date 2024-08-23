jest.mock('nativewind', () => {
  return {
    useColorScheme: jest.fn(() => ({
      setColorScheme: jest.fn(),
    })),
  };
});
