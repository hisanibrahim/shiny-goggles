const axios = require("axios");
const allDependencies = require("./dependencies");

(async () => {
  for (const [deployment, dependencies] of Object.entries(allDependencies)) {
    console.log(deployment);
    for (const [name, version] of Object.entries(dependencies)) {
      const package = await axios(
        `https://registry.npmjs.com/${name}/${version}`
      );
      console.log(`
Package name: ${name}
Reference: https://www.npmjs.com/package/${name}/v/${version}
License: ${package.data.license || "None"}
        `);
    }
  }
})();
