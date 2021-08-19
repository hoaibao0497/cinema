import { db } from "../config/db.config";
import cinema from "./cinema.model";
import cinema_movie from "./cinema_movie.model";
import cineplex from "./cineplex.model";
import movie from "./movie.model";
import seat from "./seat.model";
import showtime from "./showtime.model";
import ticket from "./ticket.model";
import user from "./user.model";

const User = db.define("user", user);
const Movie = db.define("movie", movie);
const CinemaMovie = db.define("cinema_movie", cinema_movie);
const Cinema = db.define("cinema", cinema);
const Cineplex = db.define("cineplex", cineplex);
const Showtime = db.define("showtime", showtime);
const Seat = db.define("seat", seat);
const Ticket = db.define("ticket", ticket);

Cineplex.hasMany(Cinema, cinema.cineplexId);
Cinema.belongsTo(Cineplex);

export { User, Movie, CinemaMovie, Cinema, Cineplex, Showtime, Seat, Ticket };
