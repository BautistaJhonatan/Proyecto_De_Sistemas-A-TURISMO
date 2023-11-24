Manual Técnico - Tiquipaya Turística 

Introducción: 

 

El programa tiene como objetivo proporcionar una guía completa sobre rutas turísticas llamado "Tiquipaya Turística".   

 

Descripción del proyecto: 

 

"Tiquipaya Turística" es un proyecto destinado a promover el turismo en la comunidad de Tiquipaya. Incluye una aplicación móvil para usuarios finales y una aplicación web para administradores, ofreciendo funciones específicas para cada tipo de usuario.   

 

Roles / integrantes 

 

El equipo está desarrollado por: 
 

Iriarte Colque Juan Abiel: Team Leader. 

Bautista Coro Jhonatan:   Git Master. 

Edelfrida Lima Choque: Arquitecto BD. 

 

Arquitectura del software:  

 

La solución está compuesta por un frontend de interfaz de usuario y un backend API con acceso a base de datos SQL Server. 

 

Frontend. 

 

NextJS, Sass, TailwindCSS (Web). 

React Native + Expo (Movil). 

 

Backend. 

 

Pocketbase. 

 

Patrones 

 

Para la aplicación Web con React JS se tiene el Patrón de Composición  

Patrones de diseño de interfaz de usuario para garantizar consistencia y facilidad de uso en ambas aplicaciones. 

 

 

Requisitos del sistema: 

Cliente Web 

Navegador web actualizado (Chrome, Firefox, Opera). 

Conexión estable a internet. 

 

Servidor (Backend API Pocketbase) 

Conexión estable a internet.   

Movil. 

Conexión estable a internet. 

Smartphon con Expo go intalado. 

Estar en la misma red localhost y smartphone. 

 

Instalación y configuración:  

 

Frontend (Movil). 

Clonar repositorio. 

--Instalar expo--  

npm install -g expo-cli 

--Instala dependencia--  

nmp i  

--Instala globalmente en el sistema--  

npm install -g npm  

--Limpia el cache de manera forzada--  

npm cache clean --force  

--Instala paquetes que tienen dependencias conflictivas--  

npm install --legacy-peer-deps   

npm config set legacy-peer-deps true  

--Actualiza dependencias de Yarn--  

npx expo install --fix --npm  

--Hacer correr el proyecto--  

npx expo 

Escanear el qr con aplicación expo go. 

Frontend (Web). 

Clonar repositorio  

Ejecutar npm i para descargar dependencias  

Ejecutar npm run dev – Correr aplicación.  

 

PROCEDIMIENTO DE HOSTEADO / HOSTING (configuración) 

Base de Datos 

Logeo en la web de pocketbase ya dentro se puede manipular o configurar las colecciones. 

 

Frontend 

Subir los archivos de la aplicación web al servidor.  

Configurar el servidor web para manejar las solicitudes de la aplicación web. 

 

      Backend 

 

Crear servicios de pocketbase en el proyecto usando el api que proporciona pocketbase.  

 

 

 

GIT :  

 

El código fuente se encuentra alojado en GitHub bajo el repositorio organización/ Proyecto_De_Sistemas-A-TURISMO Ahí puede obtenerse la versión más reciente de ambos proyectos. 

 

Personalización y configuración:  

 

Seguridad:  

Se maneja un manejo de sesiones de usuarios en la aplicación web. 

En la movil solicita permisos para acceder a la ubicación actual y los mapas. 

Depuración y solución de problemas:  

Frontend 

Errores renderizando componentes: revisar console.log. 

Prestar mucha atención a los mensajes en consola, casi siempre esta  

ahí la solución. 

En la aplicación móvil no corre la aplicación si existen librerías que no están en uso. 

 

Glosario de términos:  

 

Expo==> Compilador de código a tiempo real.  

 

Referencias y recursos adicionales:  

 

https://reactnative.dev ==> Documentación oficial de Reactnative. 

https://reactnative.dev ==> De acá puedes monitorear aplicación móvil. 

 

 

Herramientas de Implementación: 

 

Frontend 

JavaScript. 

 

Backend 

JavaScript. 

Bibliografía 

https://www.netguru.com/glossary/react-native 

https://www.w3schools.com/sass/sass_intro.php 

https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro/mobile/android/reactnative-expo-go 

https://itequia.com/en/discover-nestjs/ 
