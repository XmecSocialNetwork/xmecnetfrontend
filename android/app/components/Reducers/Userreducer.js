export default function(state=0,actions={}){
 switch (actions.type) {
     case "edit":
     {   console.log(actions.payload)
         return{
             name:state.name,
             occupation:state.occupation,
             company:state.company,
             aboutstatement:state.aboutstatement,
             passoutyear:state.passoutyear,
             course:state.course,
             dob:state.dob,
             CurrentAddress:state.CurrentAddress,
             PermanentAddress:state.PermanentAddress,
             contact:state.contact,
             workExp:state.workExp,
             education:state.education,
             editable:true,
             branch:state.branch,
             imageurl:state.imageurl,
             imageview:state.imageview,
             images:state.images,


         }
     }
         break;
     case "save":
     {   console.log(actions.payload)
         return{
             name:state.name,
             occupation:state.occupation,
             company:state.company,
             aboutstatement:state.aboutstatement,
             passoutyear:state.passoutyear,
             course:state.course,
             dob:state.dob,
             CurrentAddress:state.CurrentAddress,
             PermanentAddress:state.PermanentAddress,
             contact:state.contact,
             workExp:state.workExp,
             education:state.education,
             editable:false,
             branch:state.branch,
             imageurl:state.imageurl,
             imageview:state.imageview,
             images:state.images,

         }
     }
         break;
     case "imageclicked":
     {   console.log("image clicked")
         return{
             name:state.name,
             occupation:state.occupation,
             company:state.company,
             aboutstatement:state.aboutstatement,
             passoutyear:state.passoutyear,
             course:state.course,
             dob:state.dob,
             CurrentAddress:state.CurrentAddress,
             PermanentAddress:state.PermanentAddress,
             contact:state.contact,
             workExp:state.workExp,
             education:state.education,
             editable:false,
             branch:state.branch,
             imageurl:state.imageurl,
             imageview:true,
             images:state.images,

         }
     }
         break;
     default:
     return{
         name:null,
         occupation:null,
         company:null,
         aboutstatement:"Express about yourself",
         passoutyear:"Eg:2012",
         course:"Mtech/Btech",
         dob:null,
         CurrentAddress:null,
         PermanentAddress:null,
         contact:null,
         workExp:null,
         education:null,
         editable:false,
         branch:null,
         imageurl:require("../images/profilepic.jpeg"),
         imageview:false,
         images :[
          {
              source: {
                  uri:'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
              },
              title: 'Paris',
              width: 806,
              height: 720,
          },
        ]


     }

 }

}
