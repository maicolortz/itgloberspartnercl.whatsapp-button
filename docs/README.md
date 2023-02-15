
#  WHATSAPP BUTTON
El componente whatsapp-button permite conectar a los clientes por medio de whatsapp con la tienda store-theme-linio.


![image](https://user-images.githubusercontent.com/107804493/219063119-e1e506d7-6071-4e6b-b35f-9bdb027a623f.png)


## Configuración
 ### Paso 1 - Configuración Básica 
- verificar en el package.json en la carpeta raiz y en la carpeta react
- name: debe tener el nombre del componente a usar
- version: 0.01
![image](https://user-images.githubusercontent.com/107804493/219071032-71311f8e-a7e6-4518-b763-0edbae1eb2fc.png)


### Paso 2 - Clonación del repositorio
- Clona el repositorio a tu maquina local
- ![image](https://user-images.githubusercontent.com/107804493/219066933-6290a5fc-f9ba-4697-a82b-bd193c665069.png)

### Paso 3 - Editar el Manifest.json 
- Deberas editar el campo vendor que se refiere al  cliente que se este trabajando y en name el nombre del componente  custom
- ![image](https://user-images.githubusercontent.com/107804493/219067399-43dbe3c3-b080-40fa-8d74-99d07fc34ebb.png)


### Paso 4 - Instalar apps necesarias
 Nos Ubicamos en la carpeta react
```bash
cd react
```
Se ejecuta yarn para que se instalen las dependencias necesarias para que react funcione correctamente
```bash
yarn
```



### Paso 5 - Desinstalar el store-theme predeterminado
Al entrar por primera vez a la tienda, se tendra un store-theme inicial que debera ser desinstalado
- Ejecutamos vtex list para ver las apps instaladas
- identificamos  vtex.store-theme@0.0.1 y copiamos
- Ejecutamos 
```bash
vtex unistall vtex.store-theme@0.0.1
 ```
### Paso 6 - Ejecute un preview de la tienda
- Una vez ya hayas hecho login y hayas creado tu workspace para ejecutar tu tienda, deberas ejecutar vtex link en el workspace donde quieras usar tu componente custom
```bash
vtex link
```
Este permitira sincronizar los archivos de tu computadora con una direccion web que te permitira visualizar la pagina en el navegador.
- Luego ejecutaras 
```bash
vtex browse
```
Este comando sirve para abrir el navegador en la url destinada para visualizar tu tienda


### Dependencies
- manifest.json
![image](https://user-images.githubusercontent.com/107804493/219074632-1504d762-a317-4f63-838e-d97e2848c588.png)
- package.json en la carpeta raiz
```bash
"devDependencies": {
    "@vtex/intl-equalizer": "^2.5.0",
    "@vtex/prettier-config": "^0.3.5",
    "eslint": "^7.14.0",
    "eslint-config-vtex": "^12.8.11",
    "eslint-config-vtex-react": "^6.8.3",
    "husky": "^4.3.0",
    "lint-staged": "^10.5.1",
    "prettier": "^2.2.0",
    "typescript": "^3.9.6",
    "@vtex/danger": "^0.2.7"
  }
```
- package.json en la carpeta react
```bash
"dependencies": {
    "apollo-client": "^2.6.8",
    "react": "^16.12.0",
    "react-apollo": "^3.1.3",
    "react-dom": "^16.12.0",
    "react-intl": "^3.12.0"
  },
  "devDependencies": {
    "@apollo/react-testing": "^3.1.3",
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.8",
    "@types/react": "^16.9.31",
    "@vtex/test-tools": "^3.3.2",
    "@vtex/tsconfig": "^0.4.4",
    "apollo-cache-inmemory": "^1.6.5",
    "graphql": "^14.6.0",
    "prop-types": "^15.8.1",
    "typescript": "3.9.7"
  }
  ```



### Contributors
1. MAICOL ALEXIZ ORITZ HERNANDEZ
2. Desde forma indirecta con sus consejos y recomendaciones, mis tutores Luis Felipe Cerero García, David Mosquera y Julio César Arroyave 
