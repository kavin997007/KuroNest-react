import "./Profile.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const Profile = () => {

    const { currentUser } = useAuth();

    return (
        <section className="profile">

            <div className="profile-card">

                <img
                    src={
                        currentUser.photoURL ||
                        "https://i.pravatar.cc/200"
                    }
                    alt=""
                    className="profile-image"
                />

                <h2>
                    {currentUser.displayName || "KuroNest User"}
                </h2>

                <p className="member">
                    Premium Member
                </p>

                <div className="profile-info">

                    <div className="info">
                        <span>Name</span>
                        <p>{currentUser.displayName}</p>
                    </div>

                    <div className="info">
                        <span>Email</span>
                        <p>{currentUser.email}</p>
                    </div>

                    <div className="info">
                        <span>User ID</span>
                        <p>{currentUser.uid}</p>
                    </div>

                    <div className="info">
                        <span>Email Verified</span>

                        <p>
                            {currentUser.emailVerified
                                ? "✅ Verified"
                                : "❌ Not Verified"}
                        </p>

                    </div>

                </div>
                <Link to="/profile/edit" className="edit-profile-btn">
                    Edit Profile
                </Link>

            </div>

            

        </section>
    );
};

export default Profile;