/**
 * Contains funtions the web worker can run. The demo script will tell the orchestrator
 * to run the functions specified in this file.
 */

 function LogTwoParameters(first:any, second:any): void{
     console.log("logging the first: " + first);
     console.log("logging the second" + second);
 }