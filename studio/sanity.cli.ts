import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4be3yyg0',
    dataset: 'production'
  },
  studioHost: 'gqtpe-portfolio',
  deployment: {
    appId: 'eyghywszqu7j2l48iatyllri',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
