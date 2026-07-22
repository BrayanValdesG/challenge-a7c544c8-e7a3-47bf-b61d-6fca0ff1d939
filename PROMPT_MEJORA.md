# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: atoms/button.component.ts ===
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button class="button">{{ text }}</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  text = 'Button';
}

// === ARCHIVO: atoms/button.component.scss ===
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

// === ARCHIVO: molecules/card.component.ts ===
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div class="card">{{ title }}</div>',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = 'Card';
}

// === ARCHIVO: molecules/card.component.scss ===
.card {
  display: inline-block;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin: 10px;
}

// === ARCHIVO: organisms/header.component.ts ===
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<header class="header"><app-button text="Go"></app-button></header>',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}

// === ARCHIVO: organisms/header.component.scss ===
.header {
  background-color: #343a40;
  color: #fff;
  padding: 20px;
  text-align: center;
}

// === ARCHIVO: templates/layout.component.ts ===
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: '<div class="layout"><ng-content></ng-content></div>',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}

// === ARCHIVO: templates/layout.component.scss ===
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

// === ARCHIVO: pages/home/home.component.ts ===
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<app-layout><app-header></app-header><app-card title="Welcome"></app-card></app-layout>',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}

// === ARCHIVO: pages/home/home.component.scss ===
// === ARCHIVO: styles/variables.scss ===
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
}

// === ARCHIVO: assets/logo.png ===
// Este archivo es un recurso binario y no se puede mostrar como texto plano.

// === ARCHIVO: angular.json ===
{
  "projects": {
    "your-project-name": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles/variables.scss"
            ],
            "assets": [
              "src/assets"
            ]
          }
        }
      }
    }
  }
}

// === ARCHIVO: src/app/app.module.ts ===
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { CardComponent } from './molecules/card/card.component';
import { HeaderComponent } from './organisms/header/header.component';
import { LayoutComponent } from './templates/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// === ARCHIVO: src/app/app.component.ts ===
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-home></app-home>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-challenge';
}

// === ARCHIVO: src/app/app.component.scss ===
// === ARCHIVO: src/styles.scss ===
@import 'variables';

// === ARCHIVO: package.json ===
{
  "name": "frontend-challenge",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "16.0.0",
    "@angular/common": "16.0.0",
    "@angular/compiler": "16.0.0",
    "@angular/core": "16.0.0",
    "@angular/forms": "16.0.0",
    "@angular/platform-browser": "16.0.0",
   "@angular/platform-browser-dynamic": "16.0.0",
   "@angular/router": "16.0.0",
   "rxjs": "~7.5.0",
   "tslib": "^2.3.0",
   "zone.js": "~0.11.4"
  },
  "devDependencies": {
   "@angular-devkit/build-angular": "~16.0.0",
   "@angular/cli": "16.0.0",
   "@angular/compiler-cli": "16.0.0",
   "@types/node": "^12.11.1",
   "@types/jasmine": "~4.0.0",
   "jasmine-core": "~4.1.0",
   "karma": "~6.3.0",
   "karma-chrome-launcher": "~3.1.0",
   "karma-coverage": "~2.0.3",
   "karma-jasmine": "~4.0.0",
   "karma-jasmine-html-reporter": "^1.7.0",
   "protractor": "~7.0.0",
   "ts-node": "~10.8.0",
   "typescript": "~4.8.4"
  }
}

```
