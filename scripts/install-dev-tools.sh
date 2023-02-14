echo 'nodejs' $(node --version)
echo 'typescript' $(tsc --version)

npm i nodemon -g
npm i ts-node -g

echo 'nodemon' $(nodemon -v)
echo 'ts-node' $(ts-node -v)
echo 'install dev tools successfully'

# 以下 backend auto start