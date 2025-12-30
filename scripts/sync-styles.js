const fs = require('fs');
const path = require('path');

const sharedStylesPath = path.join(__dirname, '../packages/shared-config/styles/index.css');
const services = ['authe', 'patients', 'shell'];

console.log('Syncing styles from shared-config...\n');

services.forEach(service => {
  const destPath = path.join(__dirname, `../${service}/src/styles.css`);
  
  try {
    fs.copyFileSync(sharedStylesPath, destPath);
    console.log(`✓ Synced styles to ${service}/src/styles.css`);
  } catch (error) {
    console.error(`✗ Failed to sync to ${service}:`, error.message);
  }
});

console.log('\nDone!');