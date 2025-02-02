const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  title: {
    type : String,
    required : true
  }, 
  description: {
    type : String,
    required : true,
    
  },
  due_date: {
    type : Date,
    default : Date.now
  },
  date: {
    type : Date,
    default : Date.now
  }
});
const User=mongoose.model('notes',NoteSchema);

module.exports=User;