import { Sequelize } from "sequelize";
import pg from "pg"; // Import the postgres driver

// We use the DATABASE_URL you will set in the Vercel Dashboard
const connectionString = process.env.DATABASE_URL;

export const sequelize = new Sequelize(connectionString, {
  dialect: "postgres",
  dialectModule: pg, // Tells Sequelize to use the pg driver
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for Neon connection
    },
  },
  logging: false,
});

// We keep this function name so other files don't break,
// but it doesn't need to do anything anymore because Postgres saves automatically!
export async function saveDatabaseToFile() {
  return Promise.resolve();
}
