import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import "../../scss/pages/account.scss";

function Account({ session }) {
  const [username, setUsername] = useState(null);
  const [parentDOB, setParentDOB] = useState(null);
  // eslint-disable-next-line
  const [avatar_url, setAvatarUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    console.log(file);
  };

  useEffect(() => {
    async function getProfile() {
      const { user } = session;
      let { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", user.id)
        .maybeSingle();
      if (error) {
        console.warn(error);
      } else if (data) {
        setUsername(data.username);
        setParentDOB(data.parentDOB);
        setAvatarUrl(data.avatar_url);
      }
    }

    getProfile();
  }, [session]);

  async function updateProfile(event) {
    event.preventDefault();
    const { user } = session;
    let imageName = null;

    const updates = {
      id: user.id,
      username,
      parentDOB,
      avatar_url: image.name,
      updated_at: new Date(),
    };
    console.log(updates);
    let { error } = await supabase.from("profiles").upsert(updates);
    if (error) {
      alert(error.message);
    } else {
      setMsg(true);
    }
    if (image) {
      // eslint-disable-next-line
      const filePath = `${user.id}/${image.name}`;
      const { error } = await supabase.storage
        .from("profile-image")
        .upload(filePath, image);
      if (error) {
        // eslint-disable-next-line
        console.error(error);
      } else {
        return (imageName = image.name);
      }
    }
  }

  return (
    <form onSubmit={updateProfile} className="form">
      <div className="input-cont">
        <label htmlFor="email">Email</label>
        <input
          className="inputAuth"
          id="email"
          type="text"
          value={session.user.email}
          disabled
        />
      </div>
      <div className="input-cont">
        <label htmlFor="parentDOB">Parent date of birth</label>
        <input
          className="inputAuth"
          id="parentDOB"
          type="date"
          value={parentDOB || ""}
          onChange={(e) => setParentDOB(e.target.value)}
        />
      </div>
      <div className="input-cont">
        <label htmlFor="username">Childs Username</label>
        <input
          className="inputAuth"
          id="username"
          type="text"
          required
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-cont">
        <label className="fileUpload" htmlFor="profileImage">
          Upload Profile Image
        </label>
        <input
          className="hidden"
          type="file"
          id="profileImage"
          name="profileImage"
          onChange={handleFileChange}
        />
      </div>
      {image && (
        <div className="imgPreview-cont">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="imgPreview"
          />
        </div>
      )}
      <div>
        {msg && <p> Your profile has been updated</p>}
        <button className="btn" type="submit">
          Update
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
