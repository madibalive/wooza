import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Parse } from "parse";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import ConfiguredStore from "./store/index";
import data from "./episode.json";

Parse.initialize(
  "2T1de4QP3qS4HPvVhvdlThaHRFmRejtV64fzOkpY",
  "EG8xF143q6u1bS2JXBgKPKXyKj6XKA0LH0gNDpvT"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// data.map(data => {
//   var Tvshow = Parse.Object.extend("Episodes");
//   var tvshow = new Tvshow();
//   tvshow.set("title", data.snippet.title);
//   tvshow.set("year", data.snippet.publishedAt.substring(0, 4));
//   tvshow.set("runtime", "6 min");
//   //tvshow.set("genre", data.snippet.tags);
//   tvshow.set("trailer", data.snippet.id);
//   tvshow.set("desc", data.snippet.description);
//   if (data.snippet.thumbnails.hasOwnProperty("standard"))
//     tvshow.set("poster50", data.snippet.thumbnails.standard.url);
//   else tvshow.set("poster50", data.snippet.thumbnails.medium.url);
//   if (data.snippet.thumbnails.hasOwnProperty("maxres"))
//     tvshow.set("poster100", data.snippet.thumbnails.maxres.url);
//   else if (data.snippet.thumbnails.hasOwnProperty("standard"))
//     tvshow.set("poster100", data.snippet.thumbnails.standard.url);
//   else tvshow.set("poster100", data.snippet.thumbnails.medium.url);
//   tvshow.set(
//     "parent",
//     Parse.Object.extend("Channel").createWithoutData("oZHYpwVH5F")
//   );
//   // tvshow.set("viewCount", data.statistics.viewCount);
//   // tvshow.set("videoCount", data.statistics.videoCount);
//   // tvshow.set("subscriberCount", data.statistics.subscriberCount);
//   var namesplit = data.snippet.title.split(/\b/);
//   namesplit = namesplit.map(n => {
//     return n.toLowerCase();
//   });
//   tvshow.set("searchOn", namesplit);
//   //tvshow.save();
  

//   alert(tvshow.get("title"));
// });

// data.map(data => {
// var Tvshow = Parse.Object.extend("Movies");
// var tvshow = new Tvshow();
// tvshow.set("title", data.Title );
// tvshow.set("year", data.Year);
// tvshow.set("runtime", data.Runtime);
// tvshow.set("director", data.Director);
// tvshow.set("actors", data.Actors);
// // tvshow.set("trailer", data.youtube_link);
// tvshow.set("desc", data.Plot);
// tvshow.set("language", data.Language);
// tvshow.set("poster50", data.Poster50);
// tvshow.set("poster100", data.Poster100);
// tvshow.set("production", data.Production);
// tvshow.set("type", 0);

// let genreArray = [];

// var namesplit = data.Title.split(/\b/);
// var genresplit = data.Genre.split(",");
// namesplit = namesplit.map(n => {
//   return n.toLowerCase();
// });
// genresplit.map(n => {
//   genreArray.push(n.toLowerCase());
// });
// alert(data.Title)

// tvshow.set("genre", genreArray);
// tvshow.set("searchOn", namesplit);
// tvshow.save();
// tvshow.save().then(tv => {
//   data.episodes.map(episode => {
//     if (episode.season == 1) {
//       var Episode = Parse.Object.extend("Episode");
//       var episode = new Episode();
//       episode.set(
//         "parent",
//         tv
//       );
//       episode.set("poster50", data.image_thumbnail_path);
//       episode.set("title", episode.name);
//       episode.set("date", episode.air_date.substring(0, 4));
//       episode.save();
//     }
//   });
// });
//});
// Parse.Object.saveAll(saves);

ReactDOM.render(
  <Provider store={ConfiguredStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
