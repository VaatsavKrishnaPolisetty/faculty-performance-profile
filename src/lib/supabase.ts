import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wlwnoczvnulznmlromtj.supabase.co";
const SUPABASE_ANON_KEY = 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsd25vY3p2bnVsem5tbHJvbXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNTIxMjMsImV4cCI6MjEwNTYyODEyM30.ioCSv8VdoIJ3-EJiRT-FUkn-vtjOp-8twUz6Gt1Ic9I";

export const supabase = createClient(
  (import.meta as any).env?.VITE_SUPABASE_URL || SUPABASE_URL,
  (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY
);
