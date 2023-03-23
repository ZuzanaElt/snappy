import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qkyymgacogibwsilrvrp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreXltZ2Fjb2dpYndzaWxydnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0MTMxODYsImV4cCI6MTk5NDk4OTE4Nn0.1YhZipOv-wAXwmbh2Ur3oLB5eK-1RzGFIpEOBcCpQ8Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
