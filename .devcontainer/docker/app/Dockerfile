ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# .bash_aliases
# RUN touch /home/vscode/.bash_aliases
# RUN { \
#     echo "export LANG=ja_JP.UTF-8"; \
#     echo "alias ll='ls -al'"; \
#     echo "alias la='ls -A'"; \
#     echo "alias l='ls -CF'"; \
#     # echo "alias ti='terraform init'"; \
#     # echo "alias tf='terraform fmt'"; \
#     # echo "alias tp='terraform plan'"; \
#     # echo "alias to='terraform output'"; \
#     # echo "alias ta='terraform apply'"; \
#     # echo "alias taf='terraform apply -auto-approve'"; \
#     # echo "alias tfu='terraform force-unlock'"; \
#     } > /home/vscode/.bash_aliases

# ARG USERNAME=root
# ARG USER_UID=1000
# ARG USER_GID=$USER_UID



# RUN apt update \
#     && apt-get install -y sudo
#     # && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
#     # && groupadd --gid $USER_GID $USERNAME \
#     # && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
#     # && chmod -R 0440 /etc/sudoers.d/$USERNAME \

# # RUN sudo chmod 777 /workspace/node_modules
# # COPY package.json .
# # RUN npm install
# # RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
# # RUN chmod -R 777 /workspace
# # \ && apt-get curl

# WORKDIR /