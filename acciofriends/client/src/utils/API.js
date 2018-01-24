import axios from "axios";

export default {
  // Gets all books
  getProfileByEmail: function(email) {
    return axios.get("/profile" + email);
  },
  // Gets the book with the given id
  getProfile: function(id) {
    return axios.get("/profile/" + id);
  },
  // Deletes the book with the given id
  deleteProfile: function(id) {
    return axios.delete("/profile/" + id);
  },
  // Saves a book to the database
  saveProfile: function(profileData) {
    return axios.post("/profile", profileData);
  }
};