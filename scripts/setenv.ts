const { writeFile } = require('fs');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const dotenv = require('dotenv');

// read environment variables from .env file
dotenv.config();

// read the command line arguments passed with yargs
const argv = yargs(hideBin(process.argv)).argv as any;

// Decide on output file path
const isProduction = argv.environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

// Build file contents
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   PROXY_USER: "${process.env['PROXY_USER']}",
   PROXY_PASSWORD: "${process.env['PROXY_PASSWORD']}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err: any) => {
   if (err) console.log(err);
   console.log(`Wrote variables to ${targetPath}`);
});