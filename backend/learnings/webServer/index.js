const http =  require('http');
 

// without express 

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/menu' ){
        res.writeHead(200, {'contet-Type': 'application/json'})
        res.end(JSON.stringify({items: ['thali', 'biryani']}))
    }else if(req.method === 'POST' && req.url === '/order'){
        let data = ''
        req.on('data', chunk => data += chunk)
        req.on('end', () => {
            const order = JSON.parse(data)
             res.writeHead(200, {'contet-Type': 'application/json'})
        res.end(JSON.stringify({
                status:'received',
                order
        }));
        })
    }
})