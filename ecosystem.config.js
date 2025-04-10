// In your Strapi backend repo's root folder
module.exports = {
    apps: [
      {
        name: "strapi-backend",
        script: "cmd.exe",
        args: "run develop", // For development mode; later change to a production command if needed
        interpreter: "none",  
        cwd: "C:\\Users\\User-Desktop\\Desktop\\PMS\\pms_backend", // Ensure this is the correct folder
        env: {
          NODE_ENV: "development"
        },
        env_production: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  