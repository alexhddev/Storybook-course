import { createServer, IncomingMessage, ServerResponse } from 'http';

// Sample products data
const sampleProducts = [
    { name: "Laptop", price: "$999.99" },
    { name: "Smartphone", price: "$699.99" },
    { name: "Headphones", price: "$199.99" },
    { name: "Tablet", price: "$499.99" },
    { name: "Smart Watch", price: "$299.99" },
    { name: "Gaming Console", price: "$499.99" },
    { name: "Wireless Mouse", price: "$79.99" },
    { name: "Keyboard", price: "$129.99" }
];

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const url = new URL(req.url || '/', 'http://localhost');
    const path = url.pathname;

    if (path === '/products' && req.method === 'GET') {
        // Return sample products
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: true,
            data: sampleProducts,
            total: sampleProducts.length
        }));
    } else {
        // 404 for unknown routes
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            success: false,
            message: "Endpoint not found"
        }));
    }
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Products endpoint: http://localhost:${PORT}/products`);
});

export { server, sampleProducts };