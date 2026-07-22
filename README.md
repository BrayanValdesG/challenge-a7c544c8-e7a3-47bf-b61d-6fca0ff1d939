# Mejora la estructura y maquetación de un proyecto frontend

El equipo de desarrollo necesita reestructurar y mejorar la maquetación de un proyecto frontend para hacerlo más mantenible y eficiente en múltiples dispositivos. El objetivo es aplicar conceptos de Atomic Design y Mobile First para lograr estos objetivos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Estructuras frontend |
| **Nivel** | senior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 4-5 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Reestructuración de carpetas y componentes

**Objetivo:** Organizar lógicamente las carpetas y componentes del proyecto.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica las categorías de componentes según Atomic Design (Átomos, Moléculas, Organismos, Templates, Pages).
- Reorganiza las carpetas y componentes del proyecto de acuerdo a estas categorías.

**Entregable:** Proyecto reestructurado con carpetas y componentes organizados según Atomic Design.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la escalabilidad y reutilización de componentes al organizar las carpetas.
- Piensa en cómo la estructura puede facilitar el mantenimiento y la colaboración en el equipo.

</details>

### Fase 2: Implementación de maquetación Mobile First

**Objetivo:** Aplicar estrategias de maquetación eficiente para múltiples dispositivos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Define un punto de partida para la maquetación en dispositivos móviles.
- Aplica estilos y componentes de manera progresiva para adaptar la interfaz a dispositivos de mayor tamaño.

**Entregable:** Proyecto con maquetación Mobile First implementada.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza media queries para aplicar estilos de manera condicional según el tamaño del dispositivo.
- Considera la jerarquía de contenido y la experiencia del usuario en diferentes dispositivos.

</details>

### Fase 3: Revisión y optimización

**Objetivo:** Revisar y optimizar la estructura y maquetación del proyecto.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Revisa la estructura y maquetación del proyecto para identificar áreas de mejora.
- Aplica optimizaciones para mejorar la mantenibilidad y eficiencia del proyecto.

**Entregable:** Proyecto revisado y optimizado.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la consistencia en el uso de componentes y estilos.
- Piensa en cómo las optimizaciones pueden impactar en la experiencia del usuario y el rendimiento del proyecto.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es Atomic Design y cómo se aplica en la estructuración de carpetas y componentes?
- **paraQueSirve**: ¿Para qué sirve implementar una maquetación Mobile First en un proyecto frontend?
- **comoSeUsa**: ¿Cómo se utilizan media queries para aplicar estilos de manera condicional según el tamaño del dispositivo?
- **erroresComunes**: ¿Cuáles son errores comunes al aplicar Atomic Design y Mobile First en un proyecto frontend?
- **queDecisionesImplica**: ¿Qué decisiones implica la revisión y optimización de la estructura y maquetación de un proyecto frontend?

## Criterios de Evaluacion

- Reestructuración de carpetas y componentes según Atomic Design.
- Implementación de maquetación Mobile First.
- Revisión y optimización de la estructura y maquetación del proyecto.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
