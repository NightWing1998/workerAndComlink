# WorkerAndComlink
<p>This is a repo which demonstrates the use of worker threads with comlink in a normal browser window.</p>
<p>It requires one to serve this folder via a static server and it should allow cross origin requests and that's it.</p>
<p>
For initial testing purposes the index.html renders a normal html code with index.js script. 
This script is responsible for initiating worker threads which will be fectched from the network.
The worker file calculated prime numbers in the prime number function and returns all the prime numbers inside passed array.
The second function makes a network call from worker thread.
</p>
For more info refer <a href="https://www.notion.so/nightwing1998/Web-Workers-and-comlink-in-JS-7ee89a912bcb4e90b95094886b802322" target="_blank">https://www.notion.so/nightwing1998/Web-Workers-and-comlink-in-JS-7ee89a912bcb4e90b95094886b802322</a>
