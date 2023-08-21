Typescript language learning from udemy instructor max

what is the command to monitor/compile entire project directory using typscript?
Command: tsc --init 
this will create tsconfig.json file, if any file changes under root directory typscript re-compile the project.

how to includde and exclude files using tsconfig.json
tsconfig.json
=============
{
    {
        //compiler options
    },
    "exclude":["node_modules"] #by default it is excluded
    "include":["app.ts","analytics.ts"]
}

