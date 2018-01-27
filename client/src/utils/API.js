import axios from "axios";

export default {
  // Gets all books
  getProfileByEmail: function(email) {
    return axios.get("/api/profile/findbyemail", {params: {
      email: email
      }
    });
  },
  // Gets the book with the given id
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  },
  // Deletes the book with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profile/" + id);
  },
  // Saves a book to the database
  saveProfile: function(profileData) {
    return axios.post("/api/profile", profileData);
  },
    getAllProfiles: function() {
    return axios.get("/api/getAllProfiles");
  }
};