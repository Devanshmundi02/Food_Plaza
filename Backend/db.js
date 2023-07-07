const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Food_Plaza:deva_5402@foodcluster.lvu855z.mongodb.net/Food_Plaza?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log("---", err)
        }
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("Food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("Food_Category");
                foodCategory.find({}).toArray(function (err, catData) {

                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.food_items = data;
                        global.food_Category = catData;
                    }
                })

                // if(err)
                // {
                //     console.log(err);
                // }
                // else
                // {
                //     global.food_items = data;
                //     // console.log(global.food_items)
                // }
            })
        }
    });
}

module.exports = mongoDB;