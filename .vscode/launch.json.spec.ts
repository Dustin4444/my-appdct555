
describe('VSCode Launch Configuration', () => {
  const launchConfig = require('./launch.json');

  it('should have a version of 0.2.0', () => {
    expect(launchConfig.version).toBe('0.2.0');
  });

  it('should have a configurations array', () => {
    expect(Array.isArray(launchConfig.configurations)).toBe(true);
  });

  it('should have at least one configuration', () => {
    expect(launchConfig.configurations.length).toBeGreaterThan(0);
  });

  describe('Sema4.ai Launch Configuration', () => {
    const sema4aiConfig = launchConfig.configurations.find(c => c.type === 'sema4ai');

    it('should exist', () => {
      expect(sema4aiConfig).toBeDefined();
    });

    it('should have the correct name', () => {
      expect(sema4aiConfig.name).toBe('Sema4.ai: Launch task from robot.yaml');
    });

    it('should have the correct request type', () => {
      expect(sema4aiConfig.request).toBe('launch');
    });

    it('should have a robot property', () => {
      expect(sema4aiConfig.robot).toBeDefined();
    });

    it('should have the correct robot value', () => {
      expect(sema4aiConfig.robot).toBe('^\"\\${file}\"');
    });

    it('should have a task property', () => {
      expect(sema4aiConfig.task).toBeDefined();
    });

    it('should have an empty task value', () => {
      expect(sema4aiConfig.task).toBe('');
    });
  });
});
