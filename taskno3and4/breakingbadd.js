const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/breakingbad')

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

const saveInDB = async () => {
    const Product = mongoose.model('products', schemaa);
    let data = new Product({
        name: "Aman Nambisan",
        birthday: "30-12-2003",
        occupation:["college"],
        status: 'alive',
        nickname: 'aman',
        portrayed: "myself",
        category: ["not in the movie"]
    });
    const result = await data.save();
    console.log(result);
}


saveInDB();