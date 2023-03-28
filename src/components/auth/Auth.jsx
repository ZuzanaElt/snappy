import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import "../../scss/pages/account.scss";
function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      setNotice(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="auth-login">
        <h1 className="header">Welcome to Snappy</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {notice && <p>Check your email for the login link!</p>}
      </div>
      <form className="form" onSubmit={handleLogin}>
        <div className="input-cont">
          <input
            className="inputAuth"
            type="email"
            placeholder="Your email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className={"btn"} disabled={loading}>
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
export { Auth };
