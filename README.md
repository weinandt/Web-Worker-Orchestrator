# Web-Worker-Orchestrator
Allows CPU intensive Javascript to be scheduled off the main thread.

## Development Notes
1. Importing modules using ".js" extension in the module specifier in typescript
    - This is necessary becuase if the .js extension is not specified, the typescript build output won't add the .js extension and the browser won't be able to file the javascript file on the server becuase no extension is specified.
    - See this github issue for more information: https://github.com/Microsoft/TypeScript/issues/16577



    
### TODO
1. Add unit tests.
2. Determine if it is possible for a web worker to fail execution and if a recovery mechanism is necessary.
3. Once modules are supported for web workers in Chrome, change the worker to use modules. See this chromium bug for tracking support: https://bugs.chromium.org/p/chromium/issues/detail?id=680046
