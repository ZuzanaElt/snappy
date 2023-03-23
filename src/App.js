import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../src/lib/supabaseClient";
import AccountDisplay from "./pages/Account";
import Nav from "./components/Nav/Nav";

function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      if (session) {
        async function getProfile() {
          let { data, error } = await supabase
            .from("profiles")
            .select(`username, parentDOB, avatar_url`)
            .eq("id", session.user.id)
            .single();
          return data;
        }
        getProfile().then((data) => {
          setProfile(data);
        });
      }
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Router>
      <div>
        <Nav profile={profile} session={session} />
        <Routes>
          <Route path="/" />
          {session ? (
            <Route
              path="/account"
              element={<AccountDisplay session={session} />}
            />
          ) : (
            <Route path="/login" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
