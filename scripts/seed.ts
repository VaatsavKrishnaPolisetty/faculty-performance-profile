import { seedInitialCohortIfEmpty } from "../src/services/facultyService";

async function main() {
  console.log("Starting Supabase database seed...");
  const success = await seedInitialCohortIfEmpty();
  if (success) {
    console.log("Successfully seeded database!");
    process.exit(0);
  } else {
    console.error("Seeding failed!");
    process.exit(1);
  }
}

main();
