import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function EditProfileModal({ user, isopen, onClose, onSave }) {
  const{closeEditProfileModal} = useContext(ModalContext)  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    profilePhotoUrl: user?.profilePhotoUrl || "",
    coverPhotoUrl: user?.coverPhotoUrl || "",
    linkedInUrl: user?.linkedInUrl || "",
    githubUrl: user?.githubUrl || "",
    areasInterestedIn: user?.areasInterestedIn || [],
    designation: user?.designation || "Student",
    about: user?.about || "",
    location: user?.location || { state: "", country: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };
  
//   if (!isopen) return null;

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full lg:w-1/2 h-5/6 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="flex flex-col gap-3">
          <input className="border p-2 rounded" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input className="border p-2 rounded" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" disabled />
          <input className="border p-2 rounded" type="text" name="profilePhotoUrl" value={formData.profilePhotoUrl} onChange={handleChange} placeholder="Profile Photo URL" />
          <input className="border p-2 rounded" type="text" name="coverPhotoUrl" value={formData.coverPhotoUrl} onChange={handleChange} placeholder="Cover Photo URL" />
          <input className="border p-2 rounded" type="text" name="linkedInUrl" value={formData.linkedInUrl} onChange={handleChange} placeholder="LinkedIn URL" />
          <input className="border p-2 rounded" type="text" name="githubUrl" value={formData.githubUrl} onChange={handleChange} placeholder="GitHub URL" />
          <textarea className="border p-2 rounded" name="about" value={formData.about} onChange={handleChange} placeholder="About You" />
          <select className="border p-2 rounded" name="designation" value={formData.designation} onChange={handleChange}>
            <option value="Student">Student</option>
            <option value="Employee">Employee</option>
            <option value="Organization">Organization</option>
            <option value="Institute">Institute</option>
          </select>
          <input className="border p-2 rounded" type="text" name="location.state" value={formData.location.state} onChange={(e) => setFormData({ ...formData, location: { ...formData.location, state: e.target.value } })} placeholder="State" />
          <input className="border p-2 rounded" type="text" name="location.country" value={formData.location.country} onChange={(e) => setFormData({ ...formData, location: { ...formData.location, country: e.target.value } })} placeholder="Country" />
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={closeEditProfileModal} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
