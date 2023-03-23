import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import "../../scss/pages/account.scss";

function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [parentDOB, setParentDOB] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const { user } = session;
      console.log(user);
      let { data, error } = await supabase
        .from("profiles")
        .select(`username, parentDOB, avatar_url`)
        .eq("id", user.id)
        .single();
      if (error) {
        console.warn(error);
      } else if (data) {
        setUsername(data.username);
        setParentDOB(data.parentDOB);
        setAvatarUrl(data.avatar_url);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);

  async function updateProfile(event) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      username,
      parentDOB,
      avatar_url,
      updated_at: new Date(),
    };

    let { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={updateProfile} className="form">
      <div className="input-cont">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div className="input-cont">
        <label htmlFor="parentDOB">Parent date of birth</label>
        <input
          id="parentDOB"
          type="date"
          value={parentDOB || ""}
          onChange={(e) => setParentDOB(e.target.value)}
        />
      </div>
      <div className="input-cont">
        <label htmlFor="username">Childs username</label>
        <input
          id="username"
          type="text"
          required
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="btn"
          type="button"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </form>
  );
}
export { Account };
