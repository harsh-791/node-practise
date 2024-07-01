/*// WRITING
const fs = require('fs');

const content = 'This is the content to append to the file';

try {
    fs.appendFileSync('file.txt', content, 'utf8');
    console.log('Content has been appended to the file');
} catch (err) {
    console.error('Error appending to the file:', err);
}


// READING
// const fs = require('fs');

try {
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log('File content:', data);
} catch (err) {
    console.error('Error reading the file:', err);
}*/

const fs = require('fs');

// const data = fs.readFileSync('file.txt');
// console.log("" + data);

// fs.writeFileSync('file.txt',"\nclass is going on");

// fs.mkdir('dir1', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('dir formed');
// })




// fs.rmdir('dir1', { recursive : true },(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('dir removed');
// })




// fs.rename('file.txt','new-file.txt',(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("Renamed");
// })







const path = require('path');
// const p = '/home/harsh/Desktop/development/node-practise/new-file.txt'

// const dirname = path.dirname(p);
// console.log(dirname);

// const extension = path.extname(p);
// console.log(extension);








// const dest = '/home/harsh/Desktop/development/node-practise/dir1';
// const src = '/home/harsh/Desktop/development/node-practise/new-file.txt'

// const destinationFile = path.join(dest, path.basename(src));

// fs.copyFile(src, destinationFile, (err) => {
//     if (err) {
//         console.error('Error copying the file:', err);
//     }
//     else {
//         console.log('File has been copied to the folder');
//     }
// });




// const curr_path = path.join(__dirname,'file.txt');
// console.log(curr_path);



// Creating server

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/login'){
        res.write('<html><head><title>node js class</title></head><body>');
        res.write('<h1>LOGIN !</h1>');
        res.write('</body></html>');
    }
    else{
        res.write('<html><head><title>node js class</title></head><body>');
        res.write('<h1>Hello World !</h1>');
        res.write('</body></html>');
        
    }
    res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});





