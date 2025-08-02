# Namaste Nodejs- Season 1
- We can use the same variables using modules
- All the code of the module is wrapped inside a function(IIFE)

- IIFE-> Immediately Invoked Function Expression
- (()=>{})()

# Libuv- The real thing behind Node.js

- Libuv is a C library that provides a high-performance, asynchronous I/O framework
- It is the core of Node.js and is responsible for handling I/O operations such as file I
O, network I/O, and other asynchronous tasks
- Libuv is designed to be highly efficient and scalable, making it an ideal choice for building high
performance server-side applications


# setTimeout()-> when it is 0 it will print after the synchronous code, as it goes to Libuv  

# astexplorer.net- website to see AST(Abstract Syntax Tree)

# OS
- epoll(Linux)
- kqueue(macos)
- IOCP(Windows)
[Scalable I/O event Notification Mechanism]