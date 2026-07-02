import {writeFileSync} from 'node:fs'

// Mirrors src/shared/const/projectCards.ts (the /projects list tiles).
const cards = [
  {_id: 'pcard-spotify', title: 'Spotify', subtitle: 'Project based on Spotify Web API', icon: 'bi-spotify', img: '/01hero.jpg', path: '/project/spotify', year: 2024, category: 'Web Design', order: 0},
  {_id: 'pcard-trello', title: 'Trello', subtitle: 'react2', icon: 'co-trello', img: '/02hero.jpg', path: '/project/trello', year: 2024, category: 'Web Design', order: 1},
  {_id: 'pcard-portfolio', title: 'Portfolio', subtitle: 'react3', icon: 'bi-file-earmark-person', img: '/04hero.jpg', path: '/project/portfolio', year: 2025, category: 'Web Design', order: 2},
  {_id: 'pcard-socila', title: 'socila', subtitle: 'react4', icon: 'md-people-round', img: '/03hero.jpg', path: '/project/socila', year: 2023, category: 'Web Design', order: 3},
]

const lines = cards.map((c) => JSON.stringify({...c, _type: 'projectCard'})).join('\n')
writeFileSync(new URL('./seed-project-cards.ndjson', import.meta.url), lines + '\n')
console.log('wrote seed-project-cards.ndjson')
