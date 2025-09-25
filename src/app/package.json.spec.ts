
import packageJson from '../../package.json';

describe('package.json', () => {
  it('should have the correct name', () => {
    expect(packageJson.name).toBe('angular.dev');
  });

  it('should have the correct version', () => {
    expect(packageJson.version).toBe('0.0.0');
  });

  it('should have the correct scripts', () => {
    expect(packageJson.scripts.ng).toBe('ng');
    expect(packageJson.scripts.start).toBe('ng serve');
    expect(packageJson.scripts.build).toBe('ng build');
    expect(packageJson.scripts.watch).toBe('ng build --watch --configuration development');
    expect(packageJson.scripts.test).toBe('ng test');
  });

  it('should have the correct dependencies', () => {
    expect(packageJson.dependencies['@angular/animations']).toBeDefined();
    expect(packageJson.dependencies['@angular/cdk']).toBeDefined();
    expect(packageJson.dependencies['@angular/common']).toBeDefined();
    expect(packageJson.dependencies['@angular/compiler']).toBeDefined();
    expect(packageJson.dependencies['@angular/core']).toBeDefined();
    expect(packageJson.dependencies['@angular/forms']).toBeDefined();
    expect(packageJson.dependencies['@angular/material']).toBeDefined();
    expect(packageJson.dependencies['@angular/platform-browser']).toBeDefined();
    expect(packageJson.dependencies['rxjs']).toBeDefined();
    expect(packageJson.dependencies['tslib']).toBeDefined();
    expect(packageJson.dependencies['zone.js']).toBeDefined();
  });

  it('should have the correct devDependencies', () => {
    expect(packageJson.devDependencies['@angular-devkit/build-angular']).toBeDefined();
    expect(packageJson.devDependencies['@angular/cli']).toBeDefined();
    expect(packageJson.devDependencies['@angular/compiler-cli']).toBeDefined();
    expect(packageJson.devDependencies['@types/jasmine']).toBeDefined();
    expect(packageJson.devDependencies['jasmine-core']).toBeDefined();
    expect(packageJson.devDependencies['karma']).toBeDefined();
    expect(packageJson.devDependencies['karma-chrome-launcher']).toBeDefined();
    expect(packageJson.devDependencies['karma-coverage']).toBeDefined();
    expect(packageJson.devDependencies['karma-jasmine']).toBeDefined();
    expect(packageJson.devDependencies['karma-jasmine-html-reporter']).toBeDefined();
    expect(packageJson.devDependencies['typescript']).toBeDefined();
  });
});
