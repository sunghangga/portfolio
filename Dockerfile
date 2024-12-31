# Use the official Node.js image with the desired version (e.g., Node 16)
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Install dependencies for building Python 3.7 from source and build tools for node-gyp
RUN apt-get update && apt-get install -y \
  build-essential \
  libssl-dev \
  libbz2-dev \
  libreadline-dev \
  libsqlite3-dev \
  wget \
  curl \
  llvm \
  zlib1g-dev \
  libncurses5-dev \
  libgdbm-dev \
  libffi-dev \
  liblzma-dev \
  tk-dev \
  python3-pip \
  && rm -rf /var/lib/apt/lists/*

# Download and install Python 3.7.9 from the official source
RUN curl -O https://www.python.org/ftp/python/3.7.9/Python-3.7.9.tgz \
  && tar -xvzf Python-3.7.9.tgz \
  && cd Python-3.7.9 \
  && ./configure --enable-optimizations \
  && make altinstall \
  && rm -rf /Python-3.7.9.tgz /Python-3.7.9

# Set Python 3.7 as the default Python version for node-gyp
RUN update-alternatives --install /usr/bin/python3 python3 /usr/local/bin/python3.7 1

# Set environment variable to ensure `node-gyp` uses Python 3.7
ENV PYTHON=/usr/local/bin/python3.7

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the dependencies (this includes node-sass or sass)
RUN npm install

# Copy the rest of the app's code into the container
COPY . .

# Expose the application port (adjust if needed)
EXPOSE 3000

# Command to run your app (adjust if needed)
CMD ["npm", "run", "start"]
