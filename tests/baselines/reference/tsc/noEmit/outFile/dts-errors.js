currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project/a.ts]
const a = class { private p = 10; };

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "declaration": true
  }
}

//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };



Output::
/lib/tsc -p /home/src/projects/project --noEmit
[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m const a = class { private p = 10; };
[7m [0m [91m      ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m
    [7m1[0m const a = class { private p = 10; };
    [7m [0m [96m      ~[0m
    Add a type annotation to the variable a.


Found 1 error in home/src/projects/project/a.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts




Change:: no-change-run
Input::


Output::
/lib/tsc -p /home/src/projects/project --noEmit
[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m const a = class { private p = 10; };
[7m [0m [91m      ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m
    [7m1[0m const a = class { private p = 10; };
    [7m [0m [96m      ~[0m
    Add a type annotation to the variable a.


Found 1 error in home/src/projects/project/a.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts




Change:: Fix error
Input::
//// [/home/src/projects/project/a.ts]
const a = "hello";



Output::
/lib/tsc -p /home/src/projects/project --noEmit
exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts




Change:: no-change-run
Input::


Output::
/lib/tsc -p /home/src/projects/project --noEmit
exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts




Change:: Emit after fixing error
Input::


Output::
/lib/tsc -p /home/src/projects/project
exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts


//// [/home/src/projects/outFile.d.ts]
declare const a = "hello";


//// [/home/src/projects/outFile.js]
var a = "hello";




Change:: no-change-run
Input::


Output::
/lib/tsc -p /home/src/projects/project --noEmit
exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts




Change:: Introduce error
Input::
//// [/home/src/projects/project/a.ts]
const a = class { private p = 10; };



Output::
/lib/tsc -p /home/src/projects/project --noEmit
[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m const a = class { private p = 10; };
[7m [0m [91m      ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m
    [7m1[0m const a = class { private p = 10; };
    [7m [0m [96m      ~[0m
    Add a type annotation to the variable a.


Found 1 error in home/src/projects/project/a.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts




Change:: Emit when error
Input::


Output::
/lib/tsc -p /home/src/projects/project
[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m const a = class { private p = 10; };
[7m [0m [91m      ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m
    [7m1[0m const a = class { private p = 10; };
    [7m [0m [96m      ~[0m
    Add a type annotation to the variable a.


Found 1 error in home/src/projects/project/a.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts


//// [/home/src/projects/outFile.js]
var a = /** @class */ (function () {
    function class_1() {
        this.p = 10;
    }
    return class_1;
}());




Change:: no-change-run
Input::


Output::
/lib/tsc -p /home/src/projects/project --noEmit
[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m const a = class { private p = 10; };
[7m [0m [91m      ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m7[0m
    [7m1[0m const a = class { private p = 10; };
    [7m [0m [96m      ~[0m
    Add a type annotation to the variable a.


Found 1 error in home/src/projects/project/a.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "declaration": true,
  "project": "/home/src/projects/project",
  "noEmit": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/home/src/projects/project/a.ts


