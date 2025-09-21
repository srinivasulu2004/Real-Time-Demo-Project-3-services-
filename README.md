STEPS FOR DO THIS TASK.....
-> install docker (# apt install docker.io -y)
-> give docker permissions to ubuntu(# usermod -aG dcoker ubuntu)
-> install docker compose folllow the commands
'''
  sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) \
 -o /usr/local/bin/docker-compose
'''
make it executable..
'''
sudo chmod +x /usr/local/bin/docker-compose
'''
now check version
'''
docker compose version
'''

-> now go to install npm 
'''
apt install nodejs npm -y
'''
-------------------------------------------------------
now after setting all folders and files..
-> build the image (# docker compose build)
-> check list of images (# docker images)
-> after built the image run the containers (# docker compose up -d)
-> now check list of containers (# docker ps)
