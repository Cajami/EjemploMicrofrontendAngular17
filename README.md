# Microfrontends con Angular v17

Hola,

Veamos como podemos generar un pequeño ejemplo con Microfrontends en Angular.
Lo crearemos con Module Federation.

Crearemos 3 proyectos, 1 será el host-app (shell) que será quien llame a los demás proyectos microfrontends.

![image](https://github.com/user-attachments/assets/4499f961-239a-4ace-8db4-a7e524dec03f)

```
ng new host-app
...
ng new mf-users --routing
...
ng new mf-products --routing
...
```
Despues debemos instalar @angular-architects/native-federation en cada uno de los proyectos.

1. Nos posicionamos sobre el proyecto mf-products, como estamos trabajando con Angular v17 nos aseguramos que se instale la version 17 de angular-architects e indicamos que se abrirá sobre el puerto 4201

```
ng add @angular-architects/native-federation@17 --project mf-products --port 4201
```
2. Hacemos lo mismo con los otros dos proyectos, con el proyecto mf-users, y le asignamos el puerto 4202

```
ng add @angular-architects/native-federation@17 --project mf-users --port 4202
```

3. Proyecto host-app:

```
ng add @angular-architects/native-federation@17 --project host-app --port 4200
```

En los proyectos mf-products y mf-users generaremos un component en cada uno, esto para exponerlo, pueden ver los componentes en el git.

Podrán ver que se generó un archivo federation.config.js en cada uno de los proyectos.

Configuramos dicho archivo en cada proyecto:

. mf-products (federation.config.js)

![image](https://github.com/user-attachments/assets/60e897c8-8b34-4559-b456-32f746721052)

. mf-users (federation.config.js)

![image](https://github.com/user-attachments/assets/26a2ad2a-7195-45c6-81c1-db2793e7ff24)

. host-app (federation.config.js) Como es el proyecto que llamará a los demás microfrontends no se expondrá ningún componente

![image](https://github.com/user-attachments/assets/9af6a9d2-ca18-40ef-b9a9-0b3e018d03d0)


El proyecto host-app al momento de iniciar carga un json que estará en assets:

![image](https://github.com/user-attachments/assets/ba095c30-eb37-4c90-b1d3-a02dece4b6e9)

archivo: main.ts

![image](https://github.com/user-attachments/assets/66e5cf88-03b1-471f-a90a-109678b7a01d)

Archivo: src/app/app.routes.ts:

![image](https://github.com/user-attachments/assets/1c198b0f-9e6a-4d66-8ef8-a24c86466b8c)

# Ejecutar:

Despues de clonar el proyecto:

1. Posicionarse sobre cada proyecto y ejecutar:

```
ng serve
```

2. Verificará que cada proyecto se abrirá en su puerto designado.
3. En el browser ir al proyecto host-app:

http://localhost:4200/

![image](https://github.com/user-attachments/assets/6a8045cf-4cf3-44e1-89f3-e96015db7a09)

Ahora navegaremos a alguna de las rutas definidas:

- http://localhost:4200/products

![image](https://github.com/user-attachments/assets/d689eb28-66ef-4eaf-b933-039651f61694)
 
- http://localhost:4200/users

![image](https://github.com/user-attachments/assets/498c37dd-81e3-4714-8cbe-553b0c9d8e03)

Como pueden validar, aunque los microfrontends se ejecutaron sobre los puertos 4201 y 4202, los componentes se están renderizando sobre el puerto 4200 que es de host-app. 
