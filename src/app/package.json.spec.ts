
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
describe('tsconfig.json', function (): void {
  it('should have compileOnSave set to false', () => {
    expect(tsconfig.compileOnSave).toBe(false);
  });

  describe('compilerOptions', () => {
    it('should have the correct baseUrl', () => {
      expect(tsconfig.compilerOptions.baseUrl).toBe('./');
    });

    it('should have the correct outDir', () => {
      expect(tsconfig.compilerOptions.outDir).toBe('./dist/out-tsc');
    });

    it('should have forceConsistentCasingInFileNames set to true', () => {
      expect(tsconfig.compilerOptions.forceConsistentCasingInFileNames).toBe(true);
    });

    it('should have strict set to true', () => {
      expect(tsconfig.compilerOptions.strict).toBe(true);
    });

    it('should have noImplicitOverride set to true', () => {
      expect(tsconfig.compilerOptions.noImplicitOverride).toBe(true);
    });

    it('should have noPropertyAccessFromIndexSignature set to true', () => {
      expect(tsconfig.compilerOptions.noPropertyAccessFromIndexSignature).toBe(true);
    });

    it('should have noImplicitReturns set to true', () => {
      expect(tsconfig.compilerOptions.noImplicitReturns).toBe(true);
    });

    it('should have noFallthroughCasesInSwitch set to true', () => {
      expect(tsconfig.compilerOptions.noFallthroughCasesInSwitch).toBe(true);
    });

    it('should have sourceMap set to true', () => {
      expect(tsconfig.compilerOptions.sourceMap).toBe(true);
    });

    it('should have declaration set to false', () => {
      expect(tsconfig.compilerOptions.declaration).toBe(false);
    });

    it('should have downlevelIteration set to true', () => {
      expect(tsconfig.compilerOptions.downlevelIteration).toBe(true);
    });

    it('should have experimentalDecorators set to true', () => {
      expect(tsconfig.compilerOptions.experimentalDecorators).toBe(true);
    });

    it('should have moduleResolution set to "node"', () => {
      expect(tsconfig.compilerOptions.moduleResolution).toBe('node');
    });

    it('should have importHelpers set to true', () => {
      expect(tsconfig.compilerOptions.importHelpers).toBe(true);
    });

    it('should have target set to "ES2022"', () => {
      expect(tsconfig.compilerOptions.target).toBe('ES2022');
    });

    it('should have module set to "ES2022"', () => {
      expect(tsconfig.compilerOptions.module).toBe('ES2022');
    });

    it('should have useDefineForClassFields set to false', () => {
      expect(tsconfig.compilerOptions.useDefineForClassFields).toBe(false);
    });

    it('should have the correct lib', () => {
      expect(tsconfig.compilerOptions.lib).toEqual(['ES2022', 'dom']);
    });
  });

  describe('angularCompilerOptions', () => {
    it('should have enableI18nLegacyMessageIdFormat set to false', () => {
      expect(tsconfig.angularCompilerOptions.enableI18nLegacyMessageIdFormat).toBe(false);
    });

    it('should have strictInjectionParameters set to true', () => {
      expect(tsconfig.angularCompilerOptions.strictInjectionParameters).toBe(true);
    });

    it('should have strictInputAccessModifiers set to true', () => {
      expect(tsconfig.angularCompilerOptions.strictInputAccessModifiers).toBe(true);
    });

    it('should have strictTemplates set to true', () => {
      expect(tsconfig.angularCompilerOptions.strictTemplates).toBe(true);
    });

    it('should have the correct _enabledBlockTypes', () => {
      expect(tsconfig.angularCompilerOptions._enabledBlockTypes).toEqual(['if', 'for']);
    });
  });
});
