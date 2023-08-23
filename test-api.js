const axios = require('axios');
const newman = require('newman');

const apiKey = 'PMAK-64e5920bc069d00043ef8c5a-d7e4bd6b4eedae802744cbecf3f82c1be7';
const collectionId = '10797639-747d0aff-04e1-4449-9adb-9964bcf49d14';

const environment = {
  apiKey: apiKey,
};

newman.run({
  collection: `https://api.getpostman.com/collections/${collectionId}?apikey=${apiKey}`,
  environment: environment,
  reporters: 'cli',
}, (err) => {
  if (err) {
    console.error('Newman run encountered an error:', err);
  } else {
    console.log('Newman run completed successfully');
  }
});

