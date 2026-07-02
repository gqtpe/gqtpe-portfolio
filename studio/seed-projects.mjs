import {writeFileSync} from 'node:fs'

// Mirrors the text content in src/shared/const/projects.ts.
// Links + screenshots stay in code and are merged by slug.
const projects = [
  {
    _id: 'project-trello',
    slug: 'trello',
    title: 'trello',
    description:
      'Todolist is a pet project for task management, created using modern web technologies. This project allows for convenient task management and supports user authorization.',
    pills: [
      'react', 'redux', 'react-router-dom', 'typescript', 'axios', 'jest',
      'redux-toolkit', 'storybook', 'scss', 'rest-api', 'mui-material',
      'feature-based', 'chromatic', 'auth-token', 'custom-hooks', 'formik', 'gh-pages',
    ],
  },
  {
    _id: 'project-spotify',
    slug: 'spotify',
    title: 'player',
    description:
      'A Spotify clone built with Next.js, offering a similar user experience to the original Spotify platform. This project integrates with the Spotify Web API to provide music streaming, playlists, and user interaction features.',
    pills: [
      'react', 'open-auth-v2', 'typescript', 'ES', 'spotify-dashboard', 'scss',
      'storybook', 'intersection-observer', 'toasts', 'vite', 'custom-hooks',
      'redux-toolkit', 'tanstack-tables', 'vitest', 'react-router-dom',
      'auth-token', 'player', 'search',
    ],
  },
  {
    _id: 'project-portfolio',
    slug: 'portfolio',
    title: 'portfolio',
    description: 'A portfolio application built with Vue and modern UI animations.,',
    pills: ['vue', 'vue-router', 'matter-js', 'vueuse/motion', 'tailwind', 'typescript', 'splidejs'],
  },
]

const lines = projects
  .map((p) =>
    JSON.stringify({
      _id: p._id,
      _type: 'project',
      title: p.title,
      slug: {_type: 'slug', current: p.slug},
      description: p.description,
      pills: p.pills,
    })
  )
  .join('\n')

writeFileSync(new URL('./seed-projects.ndjson', import.meta.url), lines + '\n')
console.log('wrote seed-projects.ndjson')
