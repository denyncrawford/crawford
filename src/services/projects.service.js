import axios from 'axios';

const projectsWhitelist = [
  'astrodon',
  'astrodon.land',
  'docs.astrodon.land',
  'dndb',
  'dndb-web',
  'crawford',
  'DeSend',
  'dropper-deno',
  'deno-livereload',
  'deno-rollup-plugin-livereload',
  'deno-rollup-plugin-serve',
  'deno-figlet',
  'native-barcode-scanner',
  'barcode-scanner',
  'deno-gkm',
  'astrodon-vue-template',
  'astrodon-default-template',
  'graviton-polacode-plugin',
  'photoshop-channels-to-palette',
  'photoshop-images-to-channels',
  'devland-backend',
  'denyncrawford'
];

export const getProjects = async () => {
  const projectsAstrodon = await axios.get('https://api.github.com/orgs/astrodon/repos');
  const projectsDenyncrawford = await axios.get('https://api.github.com/users/denyncrawford/repos');
  const projectsDevland = await axios.get('https://api.github.com/orgs/DevLand-Network/repos');
  const projects = [...projectsAstrodon.data, ...projectsDenyncrawford.data, ...projectsDevland.data];
  return projects.filter(project => projectsWhitelist.includes(project.name)).sort((a, b) => b.stargazers_count - a.stargazers_count);
}


