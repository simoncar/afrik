/**
 * Mocking client-server processing
 */
import _blog from "./blog.json";
import _apartment from "./apartment.json";
import firebase from "../firebase";
const TIMEOUT = 100;
var feature = [];
export default {
  getBlog: (cb, timeout) => setTimeout(() => cb(_blog), timeout || TIMEOUT),
  getApartments: (cb, timeout) => {
    console.log("getApartments:", cb, _apartment);

    // const _apartment2 = getStories();
    //console.log("FFFFFFF", _apartment2);

    firebase
      .firestore()
      .collection("afrik_hub")
      .doc("feature")
      .collection("features")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          feature.push({
            title: doc.data().summaryEN,
            id: doc.id,
            date: "December 21, 2018",
            images: {
              thumbnail: doc.data().photo1,
              full:
                "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-1.jpg",
            },
            gallery: [
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-1.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-2.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-3.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-4.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-5.jpg",
            ],
            content: doc.data().descriptionEN,
            excerpt: doc.data().descriptionEN,
          });
          console.log(`${doc.id} => ${doc.data()}`);
        });

        setTimeout(() => cb(feature), timeout || TIMEOUT);
      });
  },
};
