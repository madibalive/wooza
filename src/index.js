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
  "IQT3DIqTzdURpFwuMS7csfZ5hna0G8toOMjARNgV",
  "bdSinTdohs2dWCeC7uJXYO8x5dAuWxEjDcspueFb"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// data.map(data => {
//   var Tvshow = Parse.Object.extend("Episode");
//   var tvshow = new Tvshow();
//   tvshow.set("title", data.snippet.title);
//   tvshow.set("year", data.snippet.publishedAt.substring(0, 4));
//   tvshow.set("runtime", "6 min");
//   tvshow.set("genre", data.snippet.tags);
//   // tvshow.set("trailer", data.snippet.id);
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
//     Parse.Object.extend("Channel").createWithoutData("htWnzfo07a")
//   );
//   // tvshow.set("viewCount", data.statistics.viewCount);
//   // tvshow.set("videoCount", data.statistics.videoCount);
//   // tvshow.set("subscriberCount", data.statistics.subscriberCount);
//   var namesplit = data.snippet.title.split(/\b/);
//   namesplit = namesplit.map(n => {
//     return n.toLowerCase();
//   });
//   tvshow.set("searchOn", namesplit);
//   tvshow.save();

//   //alert(tvshow.get("title"));
// });

// data.map(data => {
//   var Tvshow = Parse.Object.extend("Tvshows");
//   var tvshow = new Tvshow();
//   tvshow.set("title", data.name);
//   tvshow.set("year", data.start_date.substring(0, 4));
//   tvshow.set("runtime", data.runtime);
//   // tvshow.set("director", data.Director);
//   // tvshow.set("actors", data.Actors);
//   tvshow.set("trailer", data.youtube_link);
//   tvshow.set("desc", data.description);
//   tvshow.set("language", data.country);
//   tvshow.set("poster50", data.image_thumbnail_path);
//   tvshow.set("poster100", data.image_path);
//   tvshow.set("production", data.network);
//   tvshow.set("finder", data.id);

//   //tvshow.set("type", 0);

//   let genreArray = [];

//   var namesplit = data.name.split(/\b/);
//   // var genresplit = data.Genre.split(",");
//   namesplit = namesplit.map(n => {
//     return n.toLowerCase();
//   });
//   // genresplit.map(n => {
//   //   genreArray.push(n.toLowerCase());
//   // });

//   tvshow.set("genre", data.genres);
//   tvshow.set("searchOn", namesplit);
//alert(tvshow.get("title"));
//  tvshow.save();
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
//});
//});
// Parse.Object.saveAll(saves);

ReactDOM.render(
  <Provider store={ConfiguredStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
