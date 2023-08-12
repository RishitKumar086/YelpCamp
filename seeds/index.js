const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp")
  .then(() => {
    console.log("Mongo Connection open");
  })
  .catch((err) => {
    console.log("Mongo Error");
  });

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "64cf36947adbbe94194ff41a",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "http://source.unsplash.com/collection/484351",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laudantium maiores quisquam laborum sit quo id rerum dolorem unde, illum obcaecati amet reiciendis praesentium modi nobis? Laboriosam labore quia ratione?",
      price: price,
      images: [
        {
          url: "https://res.cloudinary.com/duztvaolo/image/upload/v1691671335/YelpCamp/ruawhmqm2qc1ucf0kvbd.jpg",
          filename: "YelpCamp/ruawhmqm2qc1ucf0kvbd",
        },
        {
          url: "https://res.cloudinary.com/duztvaolo/image/upload/v1691671337/YelpCamp/cstmhsanw3rscghxnpj5.jpg",
          filename: "YelpCamp/cstmhsanw3rscghxnpj5",
        },
        {
          url: "https://res.cloudinary.com/duztvaolo/image/upload/v1691671340/YelpCamp/eltktmcmxgsaraqmmnwq.jpg",
          filename: "YelpCamp/eltktmcmxgsaraqmmnwq",
        },
        {
          url: "https://res.cloudinary.com/duztvaolo/image/upload/v1691671342/YelpCamp/ekzobn9el0441bgyp97t.jpg",
          filename: "YelpCamp/ekzobn9el0441bgyp97t",
        },
        {
          url: "https://res.cloudinary.com/duztvaolo/image/upload/v1691671344/YelpCamp/auzbfun4wxzzbmlah1n1.jpg",
          filename: "YelpCamp/auzbfun4wxzzbmlah1n1",
        },
        {
          url: "https://res.cloudinary.com/duztvaolo/image/upload/v1691671346/YelpCamp/e5htbnhs6zggattudeyi.jpg",
          filename: "YelpCamp/e5htbnhs6zggattudeyi",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
