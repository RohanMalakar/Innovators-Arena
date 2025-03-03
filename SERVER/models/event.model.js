
import {Schema,model} from "mongoose"


const eventSchema= new Schema({
      title:{
         type: String,
         required:[true,"title is required"],
         minLength:[4,"minimum length of title is 6"],
         maxLength:[59,"maximum length of tile is 25"],
         trim:true
      },
      description:{
         type:String,
         required:[true,"description is required"],
         minLength:[6,"minimum length of description is 6"],
         maxLength:[200,"maximum length of description is 200"],
      },
      thumbnail:{
         type:String,
         required:true
      }, 
      createdBy:{
         type:String,
         required:true
      },
      date:{
         type:Date,
         required:true
      },
      duration:{
         type:String,
         required:true
      }
},{timestamps:true});
const Event=model("Event",eventSchema);

export default Event;