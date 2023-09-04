module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  projectId: 'wj3gt3',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://alura-fotos.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}
