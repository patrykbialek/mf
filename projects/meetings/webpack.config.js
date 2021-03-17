// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "../../tsconfig.json"), [
  "@shared-lib",
]);

module.exports = {
  output: {
    uniqueName: "meetings"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "meetings",
      filename: "remoteEntry.js",
      exposes: {
        "./Meetings": "./projects/meetings/src/app/meetings.component.ts",
        "./Module": "./projects/meetings/src/app/app.module.ts",
        "./PatientMeetings": "./projects/meetings/src/app/patient-meetings.component.ts"
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },

        "@shared-lib": {
          singleton: true,
          import: "projects/shared-lib/src/public-api",
        },

        // Uncomment for sharing lib of an Angular CLI or Nx workspace
        ...sharedMappings.getDescriptors(),
      },
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
