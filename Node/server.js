import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)
console.log(__filename)
const PORT = process.env.PORT;
const server =  http.createServer( async (req, res)=>{

    try{
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html')
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('<h1>Home</h1>');
                res.end();
            }else if (req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html')
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write('<h1>About</h1>');
                res.end();
            }else {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.write('<h1>404, Not Found :(</h1>');
                res.end();
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed')
        }
    } catch(error){
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Server Error :(')
    }
});

server.listen(PORT, ()=>{
    console.log(`Server Running on http://localhost:${PORT}`)
})