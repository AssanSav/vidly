import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./commons/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./commons/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      genres: getGenres(),
      currentPage: 1,
      pageSize: 4,
      selectedGenre: "",
      sortColumn: { path: "title", order: "asc" },
    };
  }


  componentDidMount() {
    this.setState({
      genres: [{ _id: "", name: "All Genres" }, ...this.state.genres],
    });
  }


  handleDelete = (movie) => {
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  };


  handleLike = (movie) => {
    console.log("cliked", movie);
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };


  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };


  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
    });
  };


  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };


  getPageData = () => {
    const {
        movies: allMovies,
        currentPage,
        pageSize,
        selectedGenre,
        sortColumn,
      } = this.state;
  
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre.name === selectedGenre.name)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const moviesNav =
      sorted.length === 0 ? (
        <h3>There are no movies in the database</h3>
      ) : (
        <h2>Showing {filtered.length} in the database</h2>
      );

    const movies = paginate(sorted, currentPage, pageSize);

    return {totalCount: filtered.length, movies: movies, moviesNav: moviesNav}
  };


  render() {
    const {
      currentPage,
      pageSize,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const {totalCount, movies, moviesNav} = this.getPageData()

    return (
      <>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            {moviesNav}
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              onPageChange={this.handlePageChange}
              itemsCount={totalCount}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
