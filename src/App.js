import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../src/lib/supabaseClient";
import AccountDisplay from "./pages/Account";
import Nav from "./components/Nav/Nav";
import "./scss/app.scss";
import LevelSelect from "./pages/LevelSelect";
import "../src/scss/pages/home.scss";
function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
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
      <div className="home">
        <Nav profile={profile} session={session} />
        <Routes>
          <Route path="/" />
          <Route
            path="/account"
            element={<AccountDisplay session={session} />}
          />
          <Route path="/level-select" element={<LevelSelect />} />
          {/* <Route path="/level-select/easy" element={<EasyLevel />} />
          <Route path="/level-select/medium" element={<MediumLevel />} />
          <Route path="/level-select/hard"  element={<HardLevel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
