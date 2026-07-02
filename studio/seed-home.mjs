import {writeFileSync} from 'node:fs'

// Mirrors the current hardcoded home texts (Hero.vue / HomePage.vue).
const doc = {
  _id: 'homeInfo',
  _type: 'homeInfo',
  heroTitle: 'gqtpe',
  heroSubtitle: 'front-end developer',
  heroBadges: ['Welcome', 'Est. 2025'],
  whoAmITitle: 'who i am?',
}

writeFileSync(new URL('./seed-home.ndjson', import.meta.url), JSON.stringify(doc) + '\n')
console.log('wrote seed-home.ndjson')
