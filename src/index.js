const server = require('./server');

server.listen(process.env.PORT || 3000, () => {
    console.log(`[App]: Listening on port ${process.env.PORT}`);
});
