exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.users = (req, res) => {
    res.status(200).send("User Content.");
    console.log("user controller");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };