#!/bin/bash

# Configure the EC2 instance to be ready for production

# Stop docker
ssh -i "./aws/ec2-key-pair.cer" ubuntu@18.210.251.134 \
  "cd ~/smooches && sudo docker compose down"

# Copy files needed for production
mkdir -p ./smooches/backend
cp ./docker-compose.yml ./smooches
cp ./docker-compose.production.yml ./smooches
cp -r ./scripts/production/* ./smooches
cp ./backend/.env.prod ./smooches/backend

# Replace the project directory on the server
ssh -i "./aws/ec2-key-pair.cer" ubuntu@18.210.251.134 rm -rf ./smooches
scp -r -i "./aws/ec2-key-pair.cer" ./smooches ubuntu@18.210.251.134:~

# Remove the temporary local directory
rm -r ./smooches

# Pull the images onto the server and run the production scripts
ssh -i "./aws/ec2-key-pair.cer" ubuntu@18.210.251.134 "cd ~/smooches && sudo sh ./pull.sh && sudo sh ./start.sh"
