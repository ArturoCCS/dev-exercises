import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DevExercises</span>,
  project: {
    link: 'https://github.com/ArturoCCS',
  },
  chat: {
    link: 'https://discord.com/users/{arttduur_91370}',
  },
  docsRepositoryBase: 'https://github.com/ArturoCCS/dev-exercises',
  footer: {
    text: `En desarrollo - MIT ${new Date().getFullYear()} ©ArturoCCS`,
  },
  feedback: {
    content: '¿Tienes preguntas o sugerencias? ¡Déjanos tu feedback!',
    labels: 'sugerencia, pregunta',
  },
  toc: {
    title: 'En esta página',
  },
  editLink: {
    component:() => null,
  },
}

export default config
