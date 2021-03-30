# Install

```
cd client
npm install
```


# Run

```
cd server
node server.js
```

In another terminal window:

```
cd client
npm start
```

# Test

In a third terminal window:

```
curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"info": "Shark teeth are embedded in the gums rather than directly affixed to the jaw, and are constantly replaced throughout life.", "source": "https://en.wikipedia.org/wiki/Shark"}'\
 -s http://localhost:3001/fact
 ```