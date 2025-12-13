import React, { useState } from "react";
import { saveResumeUrl } from "../Backend/AddFun";

export default function AddResume() {
  const [resumeUrl, setResumeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!resumeUrl.trim()) {
      alert("Please enter resume URL");
      return;
    }

    setLoading(true);
    const result = await saveResumeUrl(resumeUrl);
    setLoading(false);

    if (result.success) {
      alert("Resume link saved successfully!");
      setResumeUrl("");
    } else {
      alert(result.message);
    }
  };

  return (
    <center>
      <h1>Add Resume Link</h1>

      <input
        type="url"
        placeholder="Paste resume link here"
        value={resumeUrl}
        onChange={(e) => setResumeUrl(e.target.value)}
        style={{ width: "350px" }}
      />

      <br />
      <br />

      <button onClick={handleSave} disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </center>
  );
}
