# Backend-TesMoney
Guia para la configuración de Node.js en Instancia EC2 Ubuntu

**Estudiantes:**
- Juan Diego
- Javier Andrés Socha Maldonado

---

## 🚀 **Crear Instancia en EC2**

**1.** Para empezar es necesario lanzar la instancia en "Ubuntu 24.04".

![image](https://github.com/user-attachments/assets/e46213f2-f9be-41c2-a1ed-e1e6338f273a)

**2.** Es necesario configurar una Ip Elastica para asociarla a la instancia.

![image](https://github.com/user-attachments/assets/ebd276c7-1b26-449a-98a9-07819446f097)
 
**4.** Se deben definir las reglas de Entrada y Salida.

![image](https://github.com/user-attachments/assets/1e8dc5f5-62cb-4b25-8ba7-cae562b44db2)

![image](https://github.com/user-attachments/assets/1b972107-a985-4e05-9971-72df4701db93)

---

## 📂 **Instalar Node.js y npm**

- Conectarse a la instancia por medio de SSH:
```bash
ssh -i "clave.pem" ubuntu@ip-publica
```

- Actualizar Paquetes
```bash
sudo apt update && sudo apt upgrade -y
```

- Insatalar Node.js y npm
```bash
sudo apt install -y nodejs npm
```

- Verificar la instalación
```bash
node -v
npm -v
```

---

## ⚙️ **Configurar Backend con Express**

- Crear Carpeta para el proyecto
 ```bash
mkdir backend && cd backend
```

- Inicializar un proyecto Node.js
```bash
npm init -y
```

- Instalar Express
```bash
npm install express
```

- Crear archivo server.js
```bash
nano server.js
```

- Agregar codigo a server.js
```bash
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Servidor Node.js con Express en EC2");
});

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

- Iniciar el Servidor
```bash
node server.js
```

---

## 🔥 **Mantener el Servidor Corriendo**

Se puede hacer uso de pm2:

- Instalar pm2
```bash
sudo npm install -g pm2
```

- Ejecutar App con pm2
```bash
pm2 start server.js --name TesBackend
```

- Guardar la configuración para el reinicio
```bash
pm2 save
pm2 startup
```

- Ver Lista de Procesos en Ejecución
```bash
pm2 list
```

- Detener App
```bash
pm2 stop TesBackend
```

---

## 💻 **Usar Apache2 como Proxy inverso para poder agregar un subdominio**
### 🛠️ **Pasos para Configurar Apache2**

----

1️⃣ **Instalar Apache2**

Ejecutar:
```bash
sudo apt install apache2 -y
```

Verificar estado del proxy:
```bash
sudo systemctl status apache2
```

Si no esta activo, iniciarlo con:
```bash
sudo systemctl start apache2
```

----

2️⃣ **Habilitar los modulos del proxy**

Ejecutar los comandos para habilitar modulos necesarios:
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo systemctl restart apache2
```

----

3️⃣ **Configurar Apache para el subdominio**

- Crear archivo de configuración:
```bash
sudo nano /etc/apache2/sites-available/TesMoney.conf
```

- Agregar esta configuración:
```bash
<VirtualHost *:80>
    ServerName tesmoney.ddnsfree.com

    ProxyRequests Off
    ProxyPass / http://localhost:5000/
    ProxyPassReverse / http://localhost:5000/

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

----

4️⃣ **Activar la configuración**

- Ejecutar los siguientes comandos:
```bash
sudo a2ensite TesMoney.conf
sudo systemctl restart apache2
```

- Apuntar el Subdominio a la ip publica:

![image](https://github.com/user-attachments/assets/fc3db1af-dce1-460b-b1d6-45d563b25a4e)

----

5️⃣ **Habilitar HTTPS con Let's Encrypt**

- Para tener un certificado SSL gratuito para tu subdominio, usa Certbot:
```bash
sudo apt install certbot python3-certbot-apache -y
sudo certbot --apache -d tesmoney.ddnsfree.com
```

Esto activará HTTPS y redirigirá automáticamente el tráfico HTTP a HTTPS.



