# This MongoDb replica set is based in part from information these articles. The goal is to have highly avilable persisent storage with a real-time Db event stream. 


- <a href="https://medium.com/@albertorojasm95/mongodb-replicaset-with-docker-swarm-8461ecd904b0">MongoDB ReplicaSet with Docker Swarm</a>

- <a href="https://blog.usejournal.com/using-mongodb-as-realtime-db-with-nodejs-c6f52c266750">Using MongoDB as realtime DB with nodeJS.</a>



## Step 1. Create a keyfile
- From : <a href="https://ksearch.wordpress.com/2017/08/22/generate-and-import-a-self-signed-ssl-certificate-on-mac-osx-sierra/"> Self Signed SSL on a Mac </a>


For example, the following operation uses openssl to generate a complex pseudo-random 1024 character string to use for a keyfile.

$ openssl rand -base64 756 > security.keyfile

## Step 2. Create a RSA private key.

### The below command will create a file named 'server.pass.key' and place it in the same folder where the command is executed. 
$ openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
 
### The below command will use the 'server.pass.key' file that just generated and create 'server.key'.
$ openssl rsa -passin pass:x -in server.pass.key -out server.key
 
### We no longer need the 'server.pass.key'
$ rm server.pass.key


## Step 3: Create the Certificate Signing Request (CSR) utilizing the RSA private key we generated in the last step.
 The below command will ask you for information that would be included in the certificate. Since this is a self-signed certificate, there is no need to provide the 'challenge password' (to leave it blank, press enter).

$ openssl req -new -key server.key -out server.csr
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []: <provide a CN - usually, FQDN of your site>
Email Address []: <provide the email address to be included in the certificate signing request>
 
Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
$

## Step 4: Generate a file named, v3.ext with the below listed contents:
$ cat v3.ext
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
 
[alt_names]
DNS.1 = <specify-the-same-common-name-that-you-used-while-generating-csr-in-the-last-step>
$

## step 5. Create the SSL Certificate utilizing the CSR created in the last step.
$ openssl x509 -req -sha256 -extfile v3.ext -days 365 -in server.csr -signkey server.key -outform PEM -out cert.pem
Signature ok
subject=/C=<country>/ST=<state>/L=<locality>/O=<organization-name>/OU=<organization-unit-name>/CN=<common-name-probably-server-fqdn>/emailAddress=<email-address-provided-while-generating-csr>
Getting Private key
$