// In your Strapi backend repo's root folder
module.exports = {
    apps: [
      {
        name: "strapi-backend",
        script: "npm",
        args: "run develop", // For development mode; later change to a production command if needed
        env: {
          NODE_ENV: "development"
        },
        env_production: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  