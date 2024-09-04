const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../modules/Notes");
const { body, validationResult } = require("express-validator");
const router = express.Router();
//  Route 1: fetching all notes usiing get
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Notes.find({ user: req.user});
  res.json(notes);
});
//  Route 2: adding all notes using post
router.post(
  "/addnotes",
  fetchUser,
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, description, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user,
      });
      const savednotes = await note.save();
      res.json(savednotes);
    } catch (error) {
      //catch error
      // console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);
// Route 3: update notes using put req:login required
// and note id is required bcz one user has many notes which notes user wants to delete.
// first we pass the note id that note we want to delete after passing the note we search note in note module that note exit or not then we check the owner of note is valid or not 
// using req.params.id this we find in note module 
router.put(
  '/updatenote/:id',
  fetchUser,
  async (req, res) => {
const {title,description,tag}=req.body;
try {
  const newNote={};
if(title){newNote.title=title}
if(description){newNote.description=description}
if(tag){newNote.tag=tag}
//find the note to be update and update it
let note = await Notes.findOne({ _id: req.params.id });
if(!note){
  return res.status(401).send("Not found");
}
//the below code is checking the owner of note while we adding the note we add the user id that why here using note.user we get the note owner id
if (note.user && note.user.toString() !== req.user) {
  return res.status(401).send("Not Allowed");
}
note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
res.json({note});
}  catch (error) {
   
  res.status(500).send("internal server error");
}
  }
);
// Route 4: delete notes usiing delete req:login required
router.delete(
  '/deletenote/:id',
  fetchUser,
  async (req, res) => {
    try {
      
    
//find the note to be update and update it
let note = await Notes.findOne({ _id: req.params.id });
if(!note){
  return res.status(401).send("Not found");
}
// note.user.toString() this gives the user id 
if (note.user && note.user.toString() !== req.user) {
  return res.status(401).send("Not Allowed");
}
note=await Notes.findByIdAndDelete(req.params.id )
res.json({"success":"Note has beeen deleted"});
  }

  catch (error) {
    
    res.status(500).send("internal server error");
  }
}
);

module.exports = router;
