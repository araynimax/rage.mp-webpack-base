let path = require('path');
const execa = require('execa');
const Listr = require('listr');

const destinationFolder = path.join(__dirname, '..');

const builderTask = new Listr([{
    title: 'Client Packages',
    task: () => {
      return new Listr([{
          title: 'Copying Browser-Files',
          task: () => (execa.stdout(`cp -Rf ${path.join(__dirname, 'browser')} ${path.join(destinationFolder,'/client_packages/')}`))
        },
        {
          title: 'Packaging Client JS',
          task: () => (execa.stdout('npm run build-clientConfig'))
        }
      ])
    }
  },
  {
    title: 'Server Packages',
    task: () => (new Listr([{
      title: 'Packaging Server JS',
      task: () => (execa.stdout('npm run build-serverConfig'))
    }]))
  }
]);


builderTask.run();
