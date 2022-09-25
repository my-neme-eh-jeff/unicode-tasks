import fetch from "node-fetch"
import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/breakingbad")

getData();

var schemaa = new mongoose.Schema ({
    name:{
        type:String
    },
    birthday:{
        type:String
    },
    occupation:{
        type:[String]
    },
    status:{
        type:String
    },
    nickname:{
        type:String
    },
    portrayed:{
        type:String
    },
    category:{
        type:[String]
    },
});


const db = mongoose.model("Post",schemaa)

async function getData(){
    const data=await fetch("https://breakingbadapi.com/api/characters");
    const resp = await data.json();
    for(var i=0;i<resp.length;i++){
        const post = new db({
            name:resp[i]['name'],
            birthday:resp[i]['birthday'],
            occupation:resp[i]['occupation'],
            status:resp[i]['status'],
            nickname:resp[i]['nickname'],
            portrayed:resp[i]['portrayed'],
            category:resp[i]['category'],
        });
        post.save();
    }
}

