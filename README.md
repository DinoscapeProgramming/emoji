# Emoji
A simple program to get emojis

## Installation
Copy the __index.js__ file and the __emojis.json__ file. You don't wanna copy the whole __emoji.json__ file? No problem. Add the __installation.js__ file to your project and run this command:
```
npm install node-fetch@2.6.7
```
Then you need to start the installation. Run this command now:
```
node installation.js
```

## Documentation
### Required the program
```
const emoji = require('./emoji.js');
```

### Get emoji with name
```
emoji("football")
```

### Get emoji with parameter
```
emoji({ query: "10" })
```
