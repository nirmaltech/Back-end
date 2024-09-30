// Node.js Basic:
// Introduction to Node.js.
// Installing Node.js and npm.
// node & npm ->
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// npm is the package manager for Node.js.
// npm init
// By the use of npm init we create a package.json file

// Working with modules
// understanding HTTP module
// File system operations

// How to use module

//const fs = require('node:fs/promises');
const fs = require('fs');

// Writefile
// appendfile
// copyfile
// rename 
// unlink

// fs.writeFile("hey.txt","Hey! Hello kese ho", function(err){
//     if(err) console(err);
//     else console.log("done"); // command for run cd 02_NodeBasic after that node script.js
    
// })


// fs.appendFile("hey.txt"," I am fine", function(err){
//     if(err) console(err);
//     else console.log("done"); // command for run cd 02_NodeBasic after that node script.js
    
// })


// fs.rename("hey.txt","hello.txt", function(err){
//     if(err) console(err);
//     else console.log("done"); // command for run cd 02_NodeBasic after that node script.js
    
// })


// fs.copyFile("hello.txt","./copy/copy.txt", function(err){
//     if(err) console(err);
//     else console.log("done"); // command for run cd 02_NodeBasic after that node script.js
    
// })

// in this code we find a error

// fs.copyFile("hello.txt","./copy2/copy.txt", function(err){
//     if(err) console(err.message);
//     else console.log("done"); // command for run cd 02_NodeBasic after that node script.js
    
// })

// use of unLink

// fs.unlink("hello.txt",function(err){
//     if(err) console(err);
//     else console.log("removed"); 
// })

// fs.rmdir("./copy",{recursive: true}, function(err){
//     if(err) console(err);
//     else console.log("removed");
// })

// In place of rmdir we can use the rm only

// fs.rm("./copy",{recursive: true}, function(err){
//     if(err) console(err);
//     else console.log("removed");
// })

// UnderStanding of HTTP module



