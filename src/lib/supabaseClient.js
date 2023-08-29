import { createClient } from "@supabase/supabase-js";
const supabaseUrl="https://nxhzkctasrhzwpofpeub.supabase.co"
//const supabaseUrl = "https://qkyymgacogibwsilrvrp.supabase.co"; SEAN
//const supabaseAnonKey = SEAN
 // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFreXltZ2Fjb2dpYndzaWxydnJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0MTMxODYsImV4cCI6MTk5NDk4OTE4Nn0.1YhZipOv-wAXwmbh2Ur3oLB5eK-1RzGFIpEOBcCpQ8Y";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54aHprY3Rhc3Joendwb2ZwZXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNzc5OTgsImV4cCI6MjAwNzc1Mzk5OH0.UBNLKiPRc-qL5_vQohGnGtcHvHfKWv8Y_U2OoK-mZ_c"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
