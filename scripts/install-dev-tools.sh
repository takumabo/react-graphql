echo 'nodejs' $(node --version)
echo 'typescript' $(tsc --version)

npm i -g nodemon ts-node

echo 'nodemon' $(nodemon -v)
echo 'ts-node' $(ts-node -v)
echo 'install dev tools successfully'

# 以下 backend auto start