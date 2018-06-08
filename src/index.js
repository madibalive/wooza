import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Parse } from "parse";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import ConfiguredStore from "./store/index";

Parse.initialize(
  "2T1de4QP3qS4HPvVhvdlThaHRFmRejtV64fzOkpY",
  "EG8xF143q6u1bS2JXBgKPKXyKj6XKA0LH0gNDpvT"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// data.map(data => {
//   data.episodes.map(episode => {
//     if (episode.season == 1) {
//       var Receive = Parse.Object.extend("Episodes");
//       var receive = new Receive();
//       receive.set(
//         "tvshow",
//         Parse.Object.extend("tvshow").createWithoutData(data.parseid)
//       );
//       receive.set("poster50", data.image_thumbnail_path);
//       receive.set("title", episode.name);
//       receive.set("date", episode.air_date.substring(0, 4));
//       receive.save();
//     }
//   });

// var Receive = Parse.Object.extend("Tvshows");
// var receive = new Receive();
// receive.set(
//   "tvshow",
//   Parse.Object.extend("Image").createWithoutData(data.parseid)
// );
// receive.set("title", data.name + "season 1");
// receive.set("date", data.name + "season 1");

// receive.set("title", data.name + "season 1");
// receive.set("year", data.start_date.substring(0, 4));
// receive.set("runtime", data.runtime);
// // receive.set("director", data.Director);
// // receive.set("actors", data.Actors);
// receive.set("trailer", data.youtube_link);
// receive.set("desc", data.description);
// // receive.set("language", data.Language);
// receive.set("poster50", data.image_thumbnail_path);
// receive.set("poster100", data.image_path);
// receive.set("production", data.network);
// receive.set("type", 0);

// let genreArray = [];

// var namesplit = data.name.split(/\b/);
// // var genresplit ;
// namesplit = namesplit.map(n => {
//   return n.toLowerCase();
// });
// data.genres.map(n => {
//   genreArray.push(n.toLowerCase());
// });

// receive.set("genre", genreArray);
// receive.set("searchOn", namesplit);
// saves.push(receive);
// });
// Parse.Object.saveAll(saves);

ReactDOM.render(
  <Provider store={ConfiguredStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
