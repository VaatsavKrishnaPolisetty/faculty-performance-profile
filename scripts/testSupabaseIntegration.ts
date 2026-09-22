import { fetchCohortFromSupabase, updateFacultyInSupabase } from "../src/services/facultyService";

async function testIntegration() {
  console.log("Testing Supabase fetch...");
  const { cohort, fromDatabase } = await fetchCohortFromSupabase();
  console.log(`Fetched ${cohort.length} faculty members. fromDatabase: ${fromDatabase}`);
  
  if (!fromDatabase || cohort.length !== 42) {
    console.error("Fetch failed or incomplete!");
    process.exit(1);
  }

  // Find target faculty Kiran Kumar
  const kiran = cohort.find((f) => f.empId === "1913");
  if (!kiran) {
    console.error("Target faculty Kiran Kumar (1913) not found!");
    process.exit(1);
  }
  console.log(`Found ${kiran.name} with score: ${kiran.contextAdjustedScore}`);

  // Test updating remarks and context
  const originalRemarks = kiran.hodRemarks || "";
  const testRemark = `IQAC & HOD Verified via Supabase at ${new Date().toISOString()}`;
  kiran.hodRemarks = testRemark;
  
  console.log("Testing update to Supabase...");
  const updateSuccess = await updateFacultyInSupabase(kiran);
  console.log(`Update success: ${updateSuccess}`);

  if (!updateSuccess) {
    console.error("Update failed!");
    process.exit(1);
  }

  // Verify updated record from database
  const { cohort: updatedCohort } = await fetchCohortFromSupabase();
  const updatedKiran = updatedCohort.find((f) => f.empId === "1913");
  console.log(`Verified updated remarks in DB: "${updatedKiran?.hodRemarks}"`);

  if (updatedKiran?.hodRemarks !== testRemark) {
    console.error("Verification failed: remarks do not match!");
    process.exit(1);
  }

  console.log("All Supabase operations verified successfully!");
  process.exit(0);
}

testIntegration();
