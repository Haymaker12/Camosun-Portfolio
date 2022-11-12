# HLSC-264 Project

## How-to: 
Use your favourite console/terminal/BASH environment to perform the below commands.

1) Clone the repository onto your local machine:

```
git clone https://github.com/RadRaptorLeo/HLSC-264-project.git
```

2) Install all the dependencies for both backend server and frontend server (React):

In the main folder, run:
```
npm install
```

After all dependencies (code packages) are installed, navigate to the client folder and install the missing dependencies there as well:
```
cd client
npm install
```

Navigate back to the root folder:
```
cd ..
```

3) Run both React and Express (backend) servers concurrently:
```
npm run dev
```

Alternatively, if you just want to run React:
```
npm run client
```
Or backend:
```
npm run server
```

## Ports in use:

### Frontend (React):       3000 - http://localhost:3000/
### Backend (Express/Node): 5000 - http://localhost:5000/
