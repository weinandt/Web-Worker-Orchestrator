# Web-Worker-Orchestrator
Allows CPU intensive Javascript to be scheduled off the main thread.

## Development Notes
1. Importing modules using ".js" extension in the module specifier in typescript
    - This is necessary becuase if the .js extension is not specified, the typescript build output won't add the .js extension and the browser won't be able to file the javascript file on the server becuase no extension is specified.
    - See this github issue for more information: https://github.com/Microsoft/TypeScript/issues/16577
