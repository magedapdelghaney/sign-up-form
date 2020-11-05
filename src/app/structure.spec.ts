function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
}

type ExpectClassParams = {
  classPath: string
  className: string
  classMethods?: string[]
}

export function expectClass({ classPath, className, classMethods } : ExpectClassParams){
  const { [className]: theClass } = require(`${classPath}`)
  expect(isClass(theClass)).withContext(`class ${className} should be located in "${classPath}" file`).toEqual(true)

  if (classMethods){
    for (const methodName of classMethods){
      expect(typeof theClass.prototype[methodName]).withContext(`${className} class located in "${classPath}" file should have a "${methodName}" method defined`).toEqual("function")
    }
  }
}

describe('Test Structure', () => {
  it('should include required classes and methods with the expected names', () => {
    expectClass({
      classPath: `./${atob("YXBwLmNvbXBvbmVudC50cw==")}`, // app.component.ts
      className: atob("QXBwQ29tcG9uZW50"), // AppComponent
    })

    expectClass({
      classPath: `./${atob("dmFsaWRhdG9ycy9maWVsZG1hdGNoZXMuZGlyZWN0aXZlLnRz")}`, // validators/fieldmatches.directive.ts
      className: atob("RmllbGRtYXRjaGVzRGlyZWN0aXZl"), // FieldmatchesDirective
    })

    expectClass({
      classPath: `./${atob("c2VydmljZXMvY291bnRyaWVzLnNlcnZpY2UudHM=")}`, // services/countries.service.ts
      className: atob("Q291bnRyaWVzU2VydmljZQ=="), // CountriesService
      classMethods: [
        atob("Z2V0Q291bnRyaWVz"), // getCountries
        atob("Z2V0U3RhdGVz"), // getStates
      ]
    })

    expectClass({
      classPath: `./${atob("c2VydmljZXMvc2lnbnVwLnNlcnZpY2UudHM=")}`, // services/signup.service.ts
      className: atob("U2lnbnVwU2VydmljZQ=="), // SignupService
      classMethods: [
        atob("c2F2ZURhdGE="), // saveData
        atob("Z2V0RGF0YQ=="), // getData
      ]
    })

    expectClass({
      classPath: `./${atob("Y29tcG9uZW50cy9zaWdudXAtZGV0YWlscy9zaWdudXAtZGV0YWlscy5jb21wb25lbnQudHM=")}`, // components/signup-details/signup-details.component.ts
      className: atob("U2lnbnVwRGV0YWlsc0NvbXBvbmVudA=="), // SignupDetailsComponent
      classMethods: [
        atob("bmdPbkluaXQ="), // ngOnInit
      ]
    })

    expectClass({
      classPath: `./${atob("Y29tcG9uZW50cy9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQudHM=")}`, // components/signup-form/signup-form.component.ts
      className: atob("U2lnbnVwRm9ybUNvbXBvbmVudA=="), // SignupFormComponent
      classMethods: [
        atob("bmdPbkluaXQ="), // ngOnInit
        atob("c3VibWl0"), // submit
      ]
    })
  });
});
