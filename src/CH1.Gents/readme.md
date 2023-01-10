# Week 4 - Challenge 1

## Gentlemen pointing at you React

Crea una aplicación React a partir de esta maqueta.
Identifica qué datos del HTML actual son dinámicos
y prográmalos para que se alimenten a partir del array proporcionado.

Utiliza como mínimo los siguientes componentes:

- App
- Info
- Button
- Gent o Gentleman

La estructura de componentes y sus relaciones sería

App
  ├── Header
  ├── Info
  |     └── Button
  └──  Gent (x)
        └── Icon

El State se define en App y se pasa por props

- directamente a Info, Button, y cada Gent
- indirectamente a Icon
