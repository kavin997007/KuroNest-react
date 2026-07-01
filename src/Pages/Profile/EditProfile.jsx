import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../services/firebaseAuthService";
import { FaArrowLeft } from "react-icons/fa";

import "./EditProfile.css";

const EditProfile = () => {

    const { currentUser } = useAuth();

    const navigate = useNavigate();

    const [name, setName] = useState(currentUser.displayName || "");

    const [photo, setPhoto] = useState(currentUser.photoURL || "");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await updateProfile(currentUser, {
                displayName: name,
                photoURL: photo,
            });
            alert("Profile Updated Successfully.");
            navigate("/profile");
        } catch (err) {
            console.log(err);
            alert("Failed to update profile");
        }
        setLoading(false);
    };

    return (
        <section className="edit-profile">
            
            <div className="edit-card">
                <button
                    className="back-btn"
                    onClick={() => navigate("/profile")}
                >
                    <FaArrowLeft />
                    Back to Profile
                </button>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <label>Profile Photo URL</label>
                    <input
                        type="text"
                        value={photo}
                        onChange={(e)=>setPhoto(e.target.value)}
                    />
                    <img
                        src={photo}
                        alt=""
                        className="preview"
                    />
                    <button type="submit">
                        {loading ? "Updating..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EditProfile;