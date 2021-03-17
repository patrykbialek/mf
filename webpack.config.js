const AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require('copy-webpack-plugin');

// const ContainerReferencePlugin = require("webpack/lib/container/ContainerReferencePlugin");
// const ContainerPlugin = require("webpack/lib/container/ContainerPlugin");

const shellConfig = {
  entry: ["./projects/shell/src/polyfills.ts", "./projects/shell/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {},
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/shell/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/shell/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([
      { from: 'projects/shell/src/assets', to: 'assets' },
    ]),    
    new HtmlWebpackPlugin({
      template: "./projects/shell/src/index.html"
    })
  ],
  output: {
    filename: "[id].[name].js",
    path: __dirname + "/dist/shell",
    chunkFilename: "[id].[chunkhash].js"
  },
  devtool: 'inline-source-map',
  mode: "production"
};

const mfe1Config = {
  entry: ["./projects/patients/src/polyfills.ts", "./projects/patients/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/patients"),
    port: 3000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "patients",
      library: { type: "var", name: "patients" },
      filename: "remoteEntry.js",
      exposes: {
        "./Patients": "./projects/patients/src/app/patients.component.ts",
        "./Module": "./projects/patients/src/app/app.module.ts",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/patients/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/patients/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([
      { from: 'projects/patients/src/assets', to: 'assets' },
    ]),    
    new HtmlWebpackPlugin({
      template: "./projects/patients/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3000/",
    filename: "[name].js",
    path: __dirname + "/dist/patients",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};

const mfe2Config = {
  entry: ["./projects/meetings/src/polyfills.ts", "./projects/meetings/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/meetings"),
    port: 3000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "meetings",
      library: { type: "var", name: "meetings" },
      filename: "remoteEntry.js",
      exposes: {
        "./Meetings": "./projects/meetings/src/app/meetings.component.ts",
        "./Module": "./projects/meetings/src/app/app.module.ts",
        "./PatientMeetings": "./projects/meetings/src/app/patient-meetings.component.ts"
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/meetings/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/meetings/src/app/app.module#AppModule"
      )
    }),
    new CopyPlugin([
      { from: 'projects/meetings/src/assets', to: 'assets' },
    ]),    
    new HtmlWebpackPlugin({
      template: "./projects/meetings/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3001/",
    filename: "[name].js",
    path: __dirname + "/dist/meetings",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "production"
};


module.exports = [shellConfig, mfe1Config, mfe2Config];
