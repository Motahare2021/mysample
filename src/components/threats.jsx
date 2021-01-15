import React, { Component } from "react";
import Pagination from "./table/pagination";
import { Link } from "react-router-dom";
import ThreatsTable from "./table/threatsTable";
import { getThreats, deleteThreat } from "../services/threatService";
import { getGenres } from "../services/genreService";
import { paginate } from "../utils/paginate";
//import ListGroup from "./common/listGroup";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import { toast } from "react-toastify";
class Threats extends Component {
  state = {
    threats: [],
    // genres: [],
    currentPage: 1,
    pageSize: 10,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "Title", order: "asc" }
  };

  async componentDidMount() {
    //const { data } = await getGenres();
    // const genres = [{ _id: "", name: "All Genres" }, ...data];
    // this.setState({ threats: getMovies(), genres });

    const { data: threats } = await getThreats();
    this.setState({ threats });
  }

  handleDelete = async threat => {
    const originalThreats = this.state.threats;
    const threats = originalThreats.filter(m => m.ID !== threat.ID);
    this.setState({ threats: threats });
    try {
      await deleteThreat(threat.ID);
      // throw new Error("");
    } catch (ex) {
      // Expected (404: not found (e.g delete a post with invalid id), 400: bad request (e.g submit a form with invalid data)) - CLIENT ERRORS
      // display a specific error message
      if (ex.response && ex.response.status === 404)
        toast.error("this threat has already deleted");
      this.setState({ threats: originalThreats });
      // Unexpected (network down, server down, db down,  bug)
      // - log them
      // - display a generic and friendly error message
    }
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      threats: allthreats
    } = this.state;

    let filterd = allthreats;
    if (searchQuery) {
      filterd = allthreats.filter(m =>
        m.Title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id)
      filterd = allthreats.filter(m => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order]);
    const threats = paginate(sorted, currentPage, pageSize);

    return { totalCount: filterd.length, data: threats };
  };
  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  render() {
    const { length: threatcount } = this.state.threats;
    const { pageSize, currentPage, sortColumn } = this.state;
    const { user } = this.props;
    console.log("--------:   " + user);

    if (threatcount === 0) return <p>There are no threats in the db</p>;

    const { totalCount, searchQuery, data: threats } = this.getPagedData();

    return (
      <div className="row">
        {/* <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div> */}
        <div className="col">
          {/* <button
            className="btn btn-primary"
            onClick={() => this.props.history.push("/threats/new")}
          >
            New Threat
          </button> */}
          {user && (
            <Link
              to="/threats/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Threat
            </Link>
          )}
          <p>نمایش {totalCount} فیلم در پایگاه داده</p>

          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <ThreatsTable
            threats={threats}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Threats;
