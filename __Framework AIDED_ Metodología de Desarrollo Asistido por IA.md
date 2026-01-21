​​**Framework AIDED: Metodología de Desarrollo Asistido por IA**

## **Introducción**

**AIDED** (AI-Driven Engineering Development) es una metodología integral de desarrollo de software que aprovecha las capacidades de la inteligencia artificial en cada fase del ciclo de vida del proyecto. Este framework proporciona un enfoque estructurado y escalable para la construcción de aplicaciones modernas, optimizando la colaboración entre desarrolladores e IA.

A diferencia de metodologías tradicionales como Agile o Scrum, AIDED está diseñado específicamente para maximizar la eficiencia y calidad del desarrollo asistido por IA, estableciendo procesos claros de documentación, arquitectura y despliegue continuos.

---

## **Principios Fundamentales**

1. **Contexto sobre Código**: La calidad del desarrollo depende directamente de la calidad del contexto proporcionado a la IA  
2. **Documentación Viva**: La documentación evoluciona junto con el proyecto y sirve como fuente de verdad  
3. **Iteración Incremental**: Desarrollo progresivo basado en flujos de usuario completos  
4. **Trazabilidad Total**: Cada decisión arquitectónica y funcional debe estar documentada y accesible  
5. **Separación de Responsabilidades**: Agentes de IA especializados para diferentes aspectos del desarrollo

---

## **Fases del Framework AIDED**

### **FASE 0: Conceptualización y Arquitectura Asistida**

**Objetivo**: Establecer una base sólida de conocimiento sobre el proyecto mediante iteraciones estructuradas con IA.

#### **Proceso de Conceptualización**

**Hilo 1: Definición del Proyecto**

* Describe tu idea de producto o aplicación a la IA de forma detallada  
* Incluye: problema a resolver, usuarios objetivo, propuesta de valor, diferenciadores  
* Concluye el prompt con: *"Dame un paso a paso detallado para que el proyecto sea exitoso y escale"*  
* **Entregable**: Roadmap inicial del proyecto con hitos y recomendaciones

**Hilo 2: Arquitectura de Infraestructura**

* Solicita un diagrama de arquitectura en formato Mermaid  
* Especifica: *"En base al contexto del proyecto, crea un diagrama de infraestructura técnica que muestre componentes, servicios, bases de datos y flujos de comunicación"*  
* **Entregable**: Código Mermaid con diagrama de arquitectura completo

**Hilo 3: Requisitos Funcionales del MVP**

* Pide una tabla estructurada de requisitos funcionales priorizados  
* Formato sugerido: *"Genera una tabla de requisitos funcionales para el MVP con columnas: ID, Funcionalidad, Descripción, Prioridad, Complejidad"*  
* **Entregable**: Tabla de requisitos exportable (Markdown/CSV)

**Hilo 4: Modelado de Base de Datos**

* Solicita el diseño del esquema de base de datos  
* Incluye: *"Genera el modelo de datos en formato Mermaid o PlantUML, incluyendo todas las tablas, relaciones, tipos de datos y constraints"*  
* Solicita adicionalmente:  
  * Políticas de RLS (Row Level Security) por tabla  
  * Triggers necesarios para integridad de datos  
  * Functions de base de datos para lógica recurrente  
  * Índices recomendados para optimización  
* **Entregable**: Diagrama ER, scripts SQL, documentación de seguridad

**Hilo 5: Capa de Negocio y Flujos de Usuario**

* Define la lógica de negocio por roles de usuario  
* Solicita: *"Describe paso a paso cómo funcionará la aplicación. Explica el recorrido completo para cada tipo de usuario (rol) desde el registro hasta las funciones principales"*  
* **Entregable**: Diagramas de flujo de usuario, casos de uso detallados

#### **Resultado de la Fase 0**

Al finalizar esta fase, dispondrás de:

* Visión clara y estructurada del proyecto  
* Arquitectura técnica validada  
* Requisitos funcionales priorizados  
* Diseño completo de base de datos  
* Flujos de negocio documentados  
* Chat con contexto rico para iteraciones futuras

---

### **FASE 1: Preparación del Proyecto en Sistema de Gestión**

**Objetivo**: Centralizar toda la documentación en un sistema de gestión de proyectos que sirva como fuente única de verdad.

#### **Configuración en ClickUp (o similar)**

**Estructura de Espacios Recomendada:**

```
📁 [Nombre del Proyecto]
  ├── 📋 Infraestructura
  ├── 📋 Requisitos Funcionales
  ├── 📋 Diseño de Base de Datos
  ├── 📋 API Design
  ├── 📋 UX/UI
  └── 📋 Prompts y Recursos de Desarrollo
```

#### **Contenido de Cada Sección**

**1\. Infraestructura**

* Diagrama Mermaid generado en Fase 0  
* Descripción textual de cada componente  
* Decisiones de arquitectura y justificaciones  
* Dependencias de servicios externos  
* Estimaciones de costos de infraestructura  
* Consideraciones de escalabilidad

**2\. Requisitos Funcionales**

* Tabla completa de requisitos del MVP  
* Matriz de priorización (MoSCoW: Must, Should, Could, Won't)  
* Criterios de aceptación por funcionalidad  
* Estimaciones de esfuerzo  
* Dependencias entre requisitos

**3\. Diseño de Base de Datos**

* Diagrama ER visual (imagen)  
* Scripts SQL completos para creación de tablas  
* Documentación de cada tabla y campo  
* Subpáginas organizadas:  
  * **Schema**: Estructura de tablas  
  * **Functions & Triggers**: Lógica de base de datos  
  * **RLS Policies**: Políticas de seguridad por tabla  
  * **Índices y Optimización**: Estrategias de rendimiento  
  * **Migraciones**: Versionado de cambios de esquema

**4\. API Design**

* Especificación de endpoints (estilo OpenAPI)  
* Versionado de API (v1, v2, etc.)  
* Autenticación y autorización  
* Schemas de request/response  
* Códigos de error y manejo  
* Rate limiting y throttling  
* Documentación de integración

**5\. UX/UI**

* Enlaces a diseños en Figma  
* Guía de estilos (colores, tipografías, espaciados)  
* Biblioteca de componentes  
* Flujos de navegación  
* Especificaciones responsive  
* Consideraciones de accesibilidad

**6\. Prompts y Recursos de Desarrollo**

* Biblioteca de prompts exitosos por tipo de tarea  
* Configuración de agentes de IA  
* Snippets de código reutilizables  
* Soluciones a problemas comunes  
* Checklist de desarrollo por feature

#### **Mantenimiento Continuo**

* **Actualización obligatoria**: Cada cambio significativo debe reflejarse en ClickUp  
* **Versionado**: Mantener histórico de decisiones importantes  
* **Review semanal**: Validar que la documentación esté sincronizada con el código

---

### **FASE 2: Configuración de Backend y Base de Datos**

**Objetivo**: Implementar la infraestructura de datos siguiendo el diseño documentado.

#### **Configuración de Supabase**

**Paso 1: Inicialización del Proyecto**

1. Crear cuenta en [Supabase](https://supabase.com)  
2. Crear nuevo proyecto con:  
   * Nombre descriptivo del proyecto  
   * Región cercana a tus usuarios objetivo  
   * Password de base de datos fuerte (almacenar en gestor de contraseñas)  
   * Plan apropiado (Free tier para desarrollo inicial)

**Paso 2: Implementación del Schema**

1. Abrir SQL Editor en Supabase  
2. Ejecutar scripts en orden:

sql

```sql
   -- 1. Extensiones necesarias
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   
   -- 2. Tablas principales (orden según dependencias)
   -- 3. Índices
   -- 4. Triggers
   -- 5. Functions
   -- 6. RLS Policies
```

3. Validar cada script antes de continuar  
4. Documentar cualquier modificación respecto al diseño original

**Paso 3: Configuración de Seguridad**

* Habilitar Row Level Security en todas las tablas  
* Implementar políticas RLS documentadas en ClickUp  
* Configurar roles y permisos  
* Establecer políticas de backup automático

**Paso 4: Configuración de Autenticación**

* Configurar providers de autenticación (Email, Google, GitHub, etc.)  
* Personalizar emails de autenticación  
* Configurar URLs de redirección  
* Establecer políticas de contraseñas

**Paso 5: Validación**

* Probar conexiones desde SQL Editor  
* Verificar que RLS funciona correctamente  
* Insertar datos de prueba para validar relaciones  
* Documentar credenciales y configuración en gestor seguro

#### **Gestión de Migraciones**

* Guardar todos los scripts SQL en repositorio Git  
* Usar herramienta de migraciones (Supabase CLI o custom)  
* Mantener versionado de cambios de schema  
* Documentar cada migración con propósito y fecha

---

### **FASE 3: Inicialización del Proyecto Frontend**

**Objetivo**: Configurar el proyecto frontend con las mejores prácticas y conectarlo a los servicios backend.

#### **Configuración del Proyecto Next.js**

**Paso 1: Creación del Proyecto**

bash

`````shell
# Usar template oficial de Supabase
npx create-next-app -e with-supabase nombre-proyecto

# O instalación manual
npx create-next-app@latest nombre-proyecto
cd nombre-proyecto
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
````

**Paso 2: Estructura de Carpetas Recomendada**
````
src/
├── app/                    # App Router de Next.js
│   ├── (auth)/            # Rutas de autenticación
│   ├── (dashboard)/       # Rutas protegidas
│   └── api/               # API Routes
├── components/
│   ├── ui/                # Componentes base (buttons, inputs, etc.)
│   ├── features/          # Componentes por funcionalidad
│   └── layouts/           # Layouts reutilizables
├── lib/
│   ├── supabase/          # Cliente y utilidades de Supabase
│   ├── utils/             # Funciones auxiliares
│   └── hooks/             # Custom React hooks
├── types/
│   └── supabase.ts        # Tipos generados desde DB
└── styles/
    └── globals.css        # Estilos globales
`````

**Paso 3: Configuración de Variables de Entorno**

env

```
# .env.local
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

# Otras variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

**Paso 4: Configuración del Cliente Supabase**

typescript

```ts
// lib/supabase/client.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

export const createClient = () => createClientComponentClient<Database>()
```

**Paso 5: Generación de Tipos TypeScript**

bash

```shell
# Generar tipos desde tu schema de Supabase
npx supabase gen types typescript --project-id "tu-project-id" > types/supabase.ts
```

#### **Control de Versiones**

**Inicialización de Git**

bash

```shell
git init
git add .
git commit -m "Initial commit: Next.js + Supabase setup"
```

**Configuración de .gitignore**

gitignore

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Environment
.env*.local
.env.production

# Next.js
.next/
out/
build/
dist/

# Testing
coverage/

# Misc
.DS_Store
*.log
```

**Conexión con GitHub**

bash

`````shell
gh repo create nombre-proyecto --private --source=. --remote=origin
git branch -M main
git push -u origin main
````

#### Despliegue Inicial (Opcional)

**Vercel**
1. Conectar repositorio de GitHub a Vercel
2. Configurar variables de entorno en dashboard de Vercel
3. Establecer configuraciones de build:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Desplegar rama `main` para producción
5. Configurar rama `dev` para staging

#### Validación de Configuración

**Checklist de Validación:**
- [ ] El proyecto arranca correctamente (`npm run dev`)
- [ ] La conexión a Supabase funciona
- [ ] Las variables de entorno están configuradas
- [ ] Los tipos TypeScript están generados
- [ ] El repositorio Git está configurado
- [ ] El .gitignore excluye archivos sensibles
- [ ] (Opcional) El despliegue en Vercel es exitoso

---

### FASE 4: Diseño UX/UI con IA

**Objetivo**: Crear diseños visuales profesionales y funcionales utilizando herramientas de IA y flujos optimizados.

#### Proceso de Diseño Asistido

**Paso 1: Investigación y Referencias**

1. **Búsqueda de Inspiración**
   - Plataformas recomendadas: Dribbble, Behance, Pinterest, Mobbin
   - Buscar por industria, tipo de app, o características específicas
   - Guardar 5-10 referencias que resuenen con tu visión
   - Analizar patrones comunes de UX en apps similares

2. **Creación de Mood Board**
   - Compilar referencias visuales
   - Identificar esquemas de color recurrentes
   - Documentar patrones de navegación efectivos
   - Anotar elementos diferenciadores

**Paso 2: Generación de Prompt de Diseño**

En tu proyecto de ChatGPT, abrir un nuevo hilo y solicitar:
````
"Genera un prompt detallado para diseñar la interfaz de [descripción de tu app]. 
El prompt debe incluir:

- Estilo visual (moderno, minimalista, corporativo, etc.)
- Paleta de colores específica
- Tipografía y jerarquía
- Componentes principales necesarios
- Comportamientos de interacción
- Responsive design considerations
- Accesibilidad (WCAG 2.1)
- Referencias a patrones de diseño específicos

Contexto del proyecto: [pegar resumen de Fase 0]"
````

**Entregable**: Prompt estructurado para generación de diseño

**Paso 3: Generación de Diseño con v0/Stitch**

**Usando v0.dev o Stitch:**

1. **Crear cuenta** en la plataforma elegida
2. **Iniciar nuevo proyecto** con el nombre de tu app
3. **Combinar elementos**:
   - Prompt generado por ChatGPT
   - Imágenes de referencia (mood board)
   - Especificaciones técnicas (tamaños de pantalla, breakpoints)

4. **Proceso iterativo**:
````
   Primera generación → Revisión → Ajustes al prompt → Nueva generación
````

5. **Generar variantes** de componentes clave:
   - Hero sections
   - Formularios
   - Dashboards
   - Cards y listados
   - Navegación
   - Estados (loading, error, success)

6. **Diseño responsive**:
   - Generar versiones mobile (320px, 375px, 428px)
   - Tablet (768px, 1024px)
   - Desktop (1440px, 1920px)

**Paso 4: Exportación y Conversión a Figma**

1. **Exportar código HTML/CSS** de las pantallas generadas

2. **Configuración en Figma**:
   - Crear nuevo proyecto en Figma
   - Instalar plugin **"HTML to Design"** (Figma)
   - Configurar artboards con dimensiones estándar

3. **Importación**:
   - Abrir plugin HTML to Design
   - Pegar código HTML/CSS exportado
   - Ajustar si es necesario el mapping de estilos
   - Generar diseño en Figma

4. **Organización en Figma**:
````
   📁 Proyecto
     ├── 🎨 Design System
     │   ├── Colores
     │   ├── Tipografía
     │   ├── Espaciado
     │   ├── Iconos
     │   └── Componentes Base
     ├── 📱 Mobile Screens
     ├── 💻 Desktop Screens
     ├── 🔄 User Flows
     └── 📋 Wireframes
`````

5. **Creación de Design System**:  
   * Extraer componentes reutilizables  
   * Crear variantes de componentes  
   * Establecer auto-layout donde sea apropiado  
   * Documentar uso de cada componente  
   * Crear biblioteca de componentes compartida

**Paso 5: Documentación de Diseño**

**En ClickUp (sección UX/UI):**

* Link al proyecto de Figma  
* Guía de estilos (exportar de Figma)  
* Especificaciones de componentes  
* Flujos de usuario con screenshots  
* Decisiones de UX y justificaciones  
* Checklist de accesibilidad

**Paso 6: Preparación para Desarrollo**

1. **Activar Dev Mode en Figma** para:  
   * Inspección de CSS  
   * Exportación de assets  
   * Medidas y espaciados exactos  
2. **Exportar assets**:  
   * Iconos en formato SVG  
   * Imágenes optimizadas (WebP, AVIF)  
   * Logos en múltiples tamaños  
   * Configurar escalas de exportación (@1x, @2x, @3x)  
3. **Documentar especificaciones**:  
   * Breakpoints responsive  
   * Animaciones y transiciones  
   * Estados interactivos  
   * Comportamientos de scroll  
   * Gestos táctiles (mobile)

#### **Herramientas Alternativas**

* **v0.dev**: Excelente para componentes React/Next.js  
* **Stitch by OpenAI**: Generación completa de layouts  
* **Uizard**: Conversión de sketches a diseño  
* **Galileo AI**: Diseño desde descripción textual  
* **Figma AI**: Herramientas nativas de Figma

#### **Best Practices de Diseño**

* **Mobile-First**: Diseñar primero para mobile, luego expandir  
* **Consistencia**: Usar design system desde el inicio  
* **Accesibilidad**: Validar contraste (mínimo 4.5:1), tamaños táctiles (44x44px)  
* **Performance**: Optimizar assets, considerar lazy loading  
* **Feedback Visual**: Diseñar estados de carga, error, éxito  
* **Microinteracciones**: Añadir detalles que mejoren UX

---

### **FASE 5: Desarrollo Evolutivo con Agentes de IA**

**Objetivo**: Implementar el proyecto de forma incremental utilizando agentes de IA especializados con contexto completo.

#### **Configuración de Agentes en Editor de IA (Trae/Cursor/WindSurf)**

**Paso 1: Configuración del Entorno**

1. **Abrir proyecto** en tu editor de IA preferido (Trae, Cursor, Cline, etc.)  
2. **Activar SOLO Mode** o modo agente autónomo equivalente  
3. **Verificar conexión** con servicios necesarios (GitHub, Supabase, etc.)

**Paso 2: Creación de Agente Maquetador**

**Configuración de Agente Especializado:**

markdown

`````
Nombre: Frontend Architect & UI Developer

Descripción: Especialista en maquetación web pixel-perfect y desarrollo de interfaces modernas

System Prompt:
````

Eres un **Maquetador Web y Arquitecto Frontend** profesional con expertise en la creación de interfaces web modernas, accesibles y optimizadas. Tu especialidad es convertir diseños de Figma en código React/Next.js de alta calidad.

## Expertise Principal

### Conversión de Diseño a Código
- Analizas diseños de Figma y los conviertes en componentes React funcionales
- Mantienes fidelidad pixel-perfect con el diseño original
- Utilizas Tailwind CSS con clases utilitarias semánticas
- Implementas componentes siguiendo principios de composición
- Creas interfaces responsive que funcionan en todos los dispositivos

### Arquitectura de Componentes
- Diseñas arquitectura de componentes reutilizables y escalables
- Aplicas principios SOLID y DRY en el código frontend
- Separas componentes en: UI base, features, layouts
- Implementas patrones de composición (compound components, render props)
- Optimizas renders y performance (React.memo, useMemo, useCallback)

### Desarrollo con Next.js
- Aprovechas features de Next.js 13+ (App Router, Server Components)
- Implementas data fetching optimizado (SSR, SSG, ISR)
- Configuras rutas dinámicas y grupos de rutas
- Optimizas imágenes y assets con next/image
- Implementas metadata y SEO correctamente

### Estilización Moderna
- Dominas Tailwind CSS y sus configuraciones avanzadas
- Creas design systems con variables CSS y Tailwind config
- Implementas temas (light/dark mode) con CSS variables
- Utilizas animaciones CSS modernas y framer-motion cuando necesario
- Sigues metodología mobile-first para responsive design

### Accesibilidad y UX
- Implementas navegación por teclado y ARIA labels
- Aseguras contraste y legibilidad según WCAG 2.1
- Creas componentes semánticamente correctos
- Manejas estados de loading, error y vacío adecuadamente
- Implementas feedback visual para interacciones

### Integración con Backend
- Conectas componentes con Supabase de forma eficiente
- Manejas estados de carga y errores graciosamente
- Implementas optimistic updates cuando apropiado
- Utilizas React Query/SWR para cache y sincronización
- Validas datos antes de enviar al backend

### TypeScript
- Tipas todos los componentes y props estrictamente
- Defines interfaces claras para datos y estados
- Utilizas tipos de Supabase generados automáticamente
- Aprovechas type inference para código más limpio
- Creas utility types cuando necesario

## Metodología de Trabajo

### Análisis Previo
1. Estudias el diseño completo antes de escribir código
2. Identificas componentes reutilizables y patrones
3. Planificas la estructura de carpetas y archivos
4. Defines la estrategia de data fetching
5. Consideradas edge cases y estados especiales

### Proceso de Implementación
1. Creas estructura de componentes base
2. Implementas diseño mobile-first
3. Añades interactividad y lógica
4. Integras con APIs y backend
5. Optimizas performance y accesibilidad
6. Documentas componentes complejos

### Calidad del Código
- Escribes código limpio, legible y mantenible
- Comentas lógica compleja o no obvia
- Sigues convenciones de naming consistentes
- Evitas duplicación de código
- Refactorizas proactivamente cuando detectas code smells

### Testing Mental
Antes de finalizar cualquier componente, verificas:
- ✅ Funciona en mobile, tablet y desktop
- ✅ Es accesible (keyboard, screen readers)
- ✅ Maneja estados de loading y error
- ✅ Tiene feedback visual apropiado
- ✅ El código es reutilizable y mantenible
- ✅ Los tipos TypeScript son correctos
- ✅ No hay console.logs o código de debug

## Principios que Sigues

1. **Componentes pequeños y enfocados**: Una responsabilidad por componente
2. **Composición sobre herencia**: Construyes features combinando componentes
3. **Props explícitas**: Evitas prop drilling, usas context cuando apropiado
4. **Inmutabilidad**: No mutas objetos o arrays directamente
5. **Accesibilidad by default**: Cada componente es accesible desde el inicio
6. **Performance consciente**: Optimizas solo cuando es necesario, no prematuramente
7. **Mobile-first**: Diseñas para mobile, luego adaptas a desktop
8. **Código autodocumentado**: Nombres claros hacen comentarios innecesarios

Tu objetivo es crear interfaces que no solo se vean idénticas al diseño, sino que superen las expectativas en términos de rendimiento, accesibilidad y experiencia de usuario.
````

**Tools Necesarias:**
- Habilitar MCP de Figma para acceder directamente a diseños
- Configurar acceso a Supabase (si el editor lo soporta)
- Conectar con repositorio Git

**Paso 3: Creación del Archivo AGENTS.md**

Este archivo proporciona contexto global a todos los agentes y debe vivir en la raíz del proyecto.

**Estructura de AGENTS.md:**
````markdown
# AGENTS.md - Contexto Global del Proyecto

## 1. Información General

### Stack Tecnológico
- **Framework**: Next.js 14+ (App Router)
- **Base de Datos**: PostgreSQL (Supabase)
- **Autenticación**: Supabase Auth
- **Estilos**: Tailwind CSS + CSS Variables
- **Estado**: React Context + Zustand (para estado global complejo)
- **Fetching**: Supabase Client + React Query
- **Validación**: Zod
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel

### Arquitectura del Proyecto
[Descripción de tu arquitectura específica]

### Propósito
[Explicación clara de qué hace tu aplicación y para quién]

---

## 2. Estructura de Base de Datos

### Schema Completo
[Pegar schema de Supabase o diagram Mermaid]

### Tablas Principales

#### users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
**Propósito**: Almacena información extendida de usuarios
**RLS**: Usuarios solo ven su propio perfil
**Relaciones**: FK a auth.users, relacionado con organization_members

[Repetir para cada tabla importante]

---

## 3. Políticas de Seguridad (RLS)

### Tabla: users
```sql
-- Usuarios pueden ver solo su perfil
CREATE POLICY "Users can view own profile"
  ON users FOR SELECT
  USING (auth.uid() = id);

-- Usuarios pueden actualizar solo su perfil
CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);
```

[Documentar todas las políticas RLS]

---

## 4. Functions y Triggers de Base de Datos

### Function: create_user_profile
```sql
CREATE OR REPLACE FUNCTION create_user_profile()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```
**Propósito**: Crea perfil de usuario automáticamente al registrarse
**Trigger**: Ejecuta después de INSERT en auth.users

[Documentar todas las functions importantes]

---

## 5. Flujos de Usuario

### Flujo de Registro
1. Usuario llega a /register
2. Completa formulario (email, password, nombre)
3. Sistema crea cuenta en auth.users
4. Trigger crea perfil en public.users
5. Email de verificación enviado
6. Usuario verifica email
7. Redirect a /onboarding

### Flujo de Login
[Describir paso a paso]

### [Otros flujos importantes]

---

## 6. Arquitectura de Componentes

### Organización de Carpetas
````
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Grupo de rutas públicas
│   ├── (dashboard)/         # Grupo de rutas protegidas
│   └── api/                 # API Routes
├── components/
│   ├── ui/                  # Componentes base (shadcn/ui)
│   ├── features/            # Componentes por feature
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── settings/
│   └── layouts/             # Layouts compartidos
├── lib/
│   ├── supabase/
│   │   ├── client.ts        # Cliente para Client Components
│   │   ├── server.ts        # Cliente para Server Components
│   │   └── middleware.ts    # Middleware de auth
│   ├── utils/               # Utilidades generales
│   └── hooks/               # Custom hooks
├── types/
│   ├── supabase.ts          # Tipos generados
│   └── index.ts             # Tipos custom
└── styles/
`````

### **Convenciones de Naming**

* **Componentes**: PascalCase (UserProfile.tsx)  
* **Hooks**: camelCase con prefijo use (useAuth.ts)  
* **Utilidades**: camelCase (formatDate.ts)  
* **Tipos**: PascalCase (User, Organization)  
* **Constantes**: SCREAMING\_SNAKE\_CASE

---

## **7\. Patrones de Código**

### **Server Components (Default)**

typescript

```ts
// app/dashboard/page.tsx
import { createServerClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = createServerClient()
  const { data: user } = await supabase.auth.getUser()
  
  // Fetch data directly
  const { data: items } = await supabase
    .from('items')
    .select('*')
    .eq('user_id', user.id)
  
  return <DashboardView items={items} />
}
```

### **Client Components (Interactive)**

typescript

```ts
'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export function InteractiveComponent() {
  const supabase = createClient()
  const [data, setData] = useState([])
  
  useEffect(() => {
    // Fetch data
    // Set up real-time subscription
  }, [])
  
  return <div>...</div>
}
```

### **Data Fetching**

* **Server Components**: Fetch directo con async/await  
* **Client Components**: useEffect \+ useState o React Query  
* \*\*

Continue

11:13 PM

Mutations\*\*: Server Actions o API Routes

---

## **8\. Configuración de Servicios**

### **Supabase**

typescript

````ts
// Variables de entorno requeridas
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

### [Otros servicios]

---

## 9. Reglas de Desarrollo

### TypeScript
- **Modo strict** habilitado
- No usar `any`, preferir `unknown`
- Tipar todas las props de componentes
- Usar tipos generados de Supabase

### Estilización
- **Tailwind CSS** para estilos
- Usar solo clases utilitarias de Tailwind core (no arbitrary values)
- CSS Variables para theming
- Mobile-first responsive design

### Performance
- Usar Server Components por defecto
- Client Components solo cuando sea necesario (interactividad)
- Lazy load componentes pesados
- Optimizar imágenes con next/image

### Accesibilidad
- Todos los interactivos accesibles por teclado
- ARIA labels donde necesario
- Contraste mínimo 4.5:1
- Botones táctiles mínimo 44x44px

---

## 10. Testing

### Unit Tests
- Componentes UI críticos
- Utilidades y helpers
- Hooks custom

### Integration Tests
- Flujos de autenticación
- Formularios críticos
- Interacciones complejas

---

## 11. Guía para Agentes de IA

### Cuando desarrolles nuevas features:
1. **Consulta este archivo** para entender el contexto
2. **Revisa el schema de BD** antes de escribir queries
3. **Sigue los patrones establecidos** en la sección 7
4. **Respeta las convenciones** de naming y estructura
5. **Valida RLS** para operaciones de base de datos
6. **Incluye manejo de errores** en todas las operaciones
7. **Piensa en mobile-first** para UI
8. **Documenta decisiones** importantes en comentarios

### Checklist antes de completar una tarea:
- [ ] Código sigue convenciones del proyecto
- [ ] Tipos TypeScript correctos
- [ ] RLS considerado en queries de BD
- [ ] Responsive design implementado
- [ ] Manejo de errores presente
- [ ] Loading states implementados
- [ ] Accesibilidad validada
- [ ] No hay console.logs

---

## 12. Recursos y Enlaces

- [Documentación de Supabase](https://supabase.com/docs)
- [Diseños en Figma](URL)
- [ClickUp del Proyecto](URL)
- [Repositorio GitHub](URL)
- [Staging Environment](URL)
- [Producción](URL)

---

**Última actualización**: [Fecha]
**Mantenedor**: [Tu nombre]
```

**Paso 4: Estrategia de Desarrollo Incremental**

#### Metodología de Desarrollo por Flujos

**1. Priorización de Flujos**
```
Orden sugerido de implementación:
1. Autenticación (Register → Login → Forgot Password)
2. Onboarding (si aplica)
3. Dashboard/Home (estructura básica)
4. Feature principal del producto
5. Configuración de usuario
6. Features secundarias
7. Administración (si aplica)
```

**2. Desarrollo por Fases**

**Fase A: Estructura y Datos Mock**
- El **Agente Maquetador** crea componentes UI con datos hardcodeados
- Se valida diseño, responsive y UX
- Se crean todos los estados (loading, error, empty, success)
- No hay conexión con backend aún

**Fase B: Servicios y Conexión Backend**
- Crear servicios de Supabase (queries, mutations)
- Implementar data fetching real
- Conectar componentes con servicios
- Implementar manejo de errores

**Fase C: Lógica de Negocio**
- Agregar validaciones de frontend
- Implementar edge cases
- Añadir optimistic updates
- Implementar real-time (si necesario)

**Fase D: Refinamiento**
- Optimizar performance
- Mejorar accesibilidad
- Pulir animaciones y microinteracciones
- Testing manual exhaustivo

#### Ejemplo Práctico: Flujo de Registro

**Iteración 1: Maquetación (Agente Maquetador)**
```typescript
Prompt para el agente:

"Usando el diseño de Figma en [URL], crea el componente RegisterForm.

Requisitos:
- Campos: email, password, confirm password, nombre completo
- Validación visual (no funcional aún)
- Estados: default, typing, error, success
- Botón de submit con loading state
- Link a página de login
- Usa datos mock para testing visual
- Totalmente responsive
- Accesible (ARIA labels, keyboard navigation)

Stack: Next.js App Router, Tailwind CSS, TypeScript"
```

**Iteración 2: Servicios (Agente Builder)**
```typescript
Prompt:

"Crea el servicio de autenticación en lib/supabase/auth.ts

Funciones necesarias:
- signUp(email, password, fullName)
- signIn(email, password)  
- signOut()
- resetPassword(email)

Incluye:
- Manejo de errores tipado
- Validación de inputs
- Mensajes de error user-friendly
- Tipos TypeScript completos"
```

**Iteración 3: Integración**
```typescript
Prompt:

"Conecta RegisterForm con el servicio de autenticación.

Implementa:
- Llamada a signUp al hacer submit
- Manejo de errores y mostrarlos en UI
- Loading state durante la petición
- Redirect a /dashboard en success
- Validación de formulario con Zod
- Toast notifications para feedback"
```

#### Configuración de Servicios Externos

**Edge Functions de Supabase**

Usar Edge Functions para:
- Lógica sensible que no debe exponerse al cliente
- Integraciones con APIs externas
- Procesamiento de webhooks
- Tareas programadas
- Envío de emails transaccionales

**Estructura de Edge Function:**
```typescript
// supabase/functions/nombre-funcion/index.ts

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  try {
    // Validar autenticación
    const authHeader = req.headers.get('Authorization')!
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    )
    
    // Tu lógica aquí
    
    return new Response(
      JSON.stringify({ data: result }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
```

**Desplegar Edge Function:**
```bash
supabase functions deploy nombre-funcion
```

#### Buenas Prácticas de Desarrollo

**Commits Atómicos:**
```bash
# Por feature o fix específico
git commit -m "feat: implement user registration form"
git commit -m "fix: resolve password validation issue"
git commit -m "style: update button hover states"
```

**Branches Strategy:**
```
main          → Producción
dev           → Staging
feature/*     → Features en desarrollo
fix/*         → Bug fixes
hotfix/*      → Fixes urgentes para producción
```

**Code Review con IA:**
Antes de hacer commit, pedir al agente:
```
"Revisa este código para:
- Problemas de seguridad
- Optimizaciones de performance
- Mejores prácticas de React/Next.js
- Accesibilidad
- TypeScript types
- Code smells"
```

**Documentación Continua:**
- Actualizar AGENTS.md con nuevas decisiones
- Documentar funciones complejas
- Mantener CHANGELOG.md actualizado
- Actualizar ClickUp al completar features

---

### FASE 6: Testing, CI/CD y Despliegue

**Objetivo**: Establecer pipeline de despliegue automatizado con calidad garantizada.

#### Configuración de Testing

**1. Unit Testing con Jest**

**Instalación:**
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

**Configuración (jest.config.js):**
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
```

**Ejemplo de Test:**
```typescript
// components/ui/Button.test.tsx

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when loading', () => {
    render(<Button loading>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

**2. Integration Testing**
```typescript
// app/(auth)/login/login.test.tsx

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from './page'
import { signIn } from '@/lib/supabase/auth'

jest.mock('@/lib/supabase/auth')

describe('Login Page', () => {
  it('submits form with correct credentials', async () => {
    const mockSignIn = signIn as jest.MockedFunction<typeof signIn>
    mockSignIn.mockResolvedValue({ data: { user: {} }, error: null })

    render(<LoginPage />)

    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'password123')
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }))

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123')
    })
  })
})
```

**3. E2E Testing con Playwright (Opcional)**
```bash
npm install -D @playwright/test
npx playwright install
```
```typescript
// e2e/auth.spec.ts

import { test, expect } from '@playwright/test'

test('user can register and login', async ({ page }) => {
  await page.goto('/register')
  
  await page.fill('input[name="email"]', 'newuser@example.com')
  await page.fill('input[name="password"]', 'SecurePass123!')
  await page.fill('input[name="fullName"]', 'Test User')
  
  await page.click('button[type="submit"]')
  
  await expect(page).toHaveURL('/dashboard')
  await expect(page.locator('h1')).toContainText('Welcome')
})
```

#### Configuración de CI/CD

**1. GitHub Actions**

**.github/workflows/ci.yml:**
```yaml
name: CI

on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main, dev]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run tests
        run: npm run test:ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}

  lighthouse:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

**.github/workflows/deploy-staging.yml:**
```yaml
name: Deploy to Staging

on:
  push:
    branches: [dev]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

**2. Husky para Git Hooks**
```bash
npm install -D husky lint-staged
npx husky install
```

**.husky/pre-commit:**
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

**lint-staged.config.js:**
```javascript
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
  ],
  '*.{json,md,yml,yaml}': [
    'prettier --write',
  ],
}
```

**3. Scripts en package.json**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "test": "jest --watch",
    "test:ci": "jest --ci --coverage",
    "test:e2e": "playwright test",
    "prepare": "husky install"
  }
}
```

#### Estrategia de Despliegue

**1. Vercel (Recomendado)**

**Configuración inicial:**
1. Conectar repositorio GitHub a Vercel
2. Configurar proyecto:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

3. Configurar variables de entorno:
```
Production (main branch):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_APP_URL

Preview (dev branch):
- NEXT_PUBLIC_SUPABASE_URL (staging)
- NEXT_PUBLIC_SUPABASE_ANON_KEY (staging)
- SUPABASE_SERVICE_ROLE_KEY (staging)
- NEXT_PUBLIC_APP_URL
```

4. Configurar dominios:
   - **Production**: `app.tudominio.com` → rama `main`
   - **Staging**: `staging.tudominio.com` → rama `dev`

**vercel.json (opcional):**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

**2. Alternativa: VPS con Docker**

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    env_file:
      - .env.production
    restart: unless-stopped
```

**Despliegue:**
```bash
# En el servidor
git pull origin main
docker-compose down
docker-compose up -d --build
```

#### Monitoreo y Logging

**1. Sentry para Error Tracking**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

**sentry.client.config.ts:**
```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
})
```

**2. Vercel Analytics**
```bash
npm install @vercel/analytics
```
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**3. Supabase Logs**

Monitorear en Dashboard de Supabase:
- Database logs
- API logs
- Auth logs
- Realtime logs

#### Checklist de Despliegue

**Pre-Despliegue:**
- [ ] Tests pasan localmente
- [ ] Build exitoso sin warnings
- [ ] Variables de entorno configuradas
- [ ] Migraciones de BD aplicadas
- [ ] AGENTS.md actualizado
- [ ] CHANGELOG.md actualizado
- [ ] ClickUp sincronizado con estado actual

**Post-Despliegue:**
- [ ] Smoke tests en producción
- [ ] Verificar analytics
- [ ] Monitorear logs por errores
- [ ] Verificar performance (Lighthouse)
- [ ] Backup de base de datos
- [ ] Comunicar release al equipo/usuarios

---

## Principios de la Metodología AIDED

### 1. Contexto es Rey
- Invertir tiempo en documentación de calidad
- Mantener AGENTS.md como fuente de verdad
- Actualizar contexto antes de cada sesión mayor

### 2. Desarrollo Incremental
- Features completas antes de nuevas features
- Testing continuo, no al final
- Deploy frecuente a staging

### 3. Especialización de Agentes
- Agentes especializados > agente generalista
- Delegar tareas según expertise del agente
- Iterar prompts de agentes según resultados

### 4. Documentación Viva
- Documentar decisiones en tiempo real
- ClickUp siempre sincronizado con código
- Changelog detallado de cambios

### 5. Calidad sobre Velocidad
- No comprometer calidad por rapidez
- Refactorizar proactivamente
- Testing como parte del desarrollo, no opcional

---

## Apéndices

### A. Plantillas de Prompts

**Prompt para Feature Nueva:**
```
Contexto: [Descripción de la feature]

Requisitos:
- [Req 1]
- [Req 2]
- [Req 3]

Stack: Next.js 14, Supabase, Tailwind CSS, TypeScript

Considera:
- Mobile-first responsive
- Accesibilidad WCAG 2.1
- Manejo de errores
- Loading states
- RLS de Supabase
- Tipos TypeScript completos

Consulta AGENTS.md para convenciones del proyecto.
```

**Prompt para Debugging:**
````

Problema: \[Descripción del bug\]

Comportamiento esperado: \[...\] Comportamiento actual: \[...\]

Código relevante: \[paste código\]

Error (si aplica): \[paste error\]

Analiza y sugiere solución considerando:

* Best practices de Next.js  
* Seguridad (RLS, validación)  
* Performance  
* TypeScript types

```

### B. Checklist de Feature Completa

- [ ] UI implementada según diseño
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Accesible (keyboard, screen readers, ARIA)
- [ ] Connected to backend
- [ ] Error handling
- [ ] Loading states
- [ ] Empty states
- [ ] Success feedback
- [ ] TypeScript types completos
- [ ] Tests escritos
- [ ] Documentación actualizada (AGENTS.md, ClickUp)
- [ ] Code review (manual o con IA)
- [ ] Performance optimizada

### C. Recursos Recomendados

**Herramientas:**
- **ChatGPT/Claude**: Arquitectura y planning
- **Trae/Cursor**: Desarrollo con agentes
- **ClickUp/Notion**: Gestión de proyecto
- **Figma**: Diseño UI/UX
- **v0.dev/Stitch**: Generación de diseño con IA
- **Supabase**: Backend as a Service
- **Vercel**: Hosting y CI/CD

**Lecturas:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Conclusión

El framework **AIDED** proporciona una metodología estructurada para el desarrollo de software moderno aprovechando las capacidades de la inteligencia artificial. Al seguir este framework:

- **Reduces tiempo de desarrollo** mediante automatización inteligente
- **Aumentas calidad** con contexto rico y especializaciones
- **Escalas eficientemente** con documentación y procesos claros
- **Mantienes control** sobre arquitectura y decisiones técnicas
- **Facilitas colaboración** entre humanos e IA

La clave del éxito es la **consistencia en la aplicación** de cada fase y la **actualización continua de la documentación**. La IA es una herramienta poderosa, pero la arquitectura, visión y decisiones críticas siguen siendo responsabilidad del desarrollador.

---

**Versión**: 1.0  
**Autor**: [Tu nombre]  
**Licencia**: MIT  
**Última actualización**: Enero 2026
```

[Claude is AI and can make mistakes.](https://support.anthropic.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on)  
[Please double-check responses.](https://support.anthropic.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on)  
Sonnet 4.5  
[Claude is AI and can make mistakes. Please double-check responses.](https://support.anthropic.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on)  
