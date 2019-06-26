# Web-Worker-Orchestrator
Allows CPU intensive Javascript to be scheduled off the main thread in multiple web workers.

# Build
1. Have Typescript install globally.
2. Run `tsc` from the root of the project directory (the one with the tsconfig.json file in it).

# Run Tests
1. Have node/npm installed.
2. Have http-server installed: `npm install -g http-server`
3. Run `http-server --cors`
4. Navigate to the url the server starts on with a path to the index.html: so http://127.0.0.1:8080/demo/index.html

## Development Notes
1. Importing modules using ".js" extension in the module specifier in typescript
    - This is necessary becuase if the .js extension is not specified, the typescript build output won't add the .js extension and the browser won't be able to file the javascript file on the server becuase no extension is specified.
    - See this github issue for more information: https://github.com/Microsoft/TypeScript/issues/16577

## Tests
Tests reside in the test directory and use the Jasmine testing framework: https://github.com/jasmine/jasmine. The typings for Jasmine (needed to write tests in typescript) were obtained from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jasmine/index.d.ts.


    
### TODO
1. Add unit tests.
2. Determine if it is possible for a web worker to fail execution and if a recovery mechanism is necessary.
3. Once modules are supported for web workers in Chrome, change the worker to use modules. See this chromium bug for tracking support: https://bugs.chromium.org/p/chromium/issues/detail?id=680046
4. Add documentation on how to use.
5. Add documentation on building.
6. Add dist folder. Reference scripts from dist folder instead of demo. That way demo and tests can be separate.
7. Look into job scheduluing with async await instead of callbacks.
