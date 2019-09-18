//GLOBAL imports
import React, { Component } from "react";
import get from "lodash/get";
//LOCAL imports
import CommentsView from "../views/CommentsView";
import { getComments } from "../../../common/api/services";

const initialState = {
  comments: [],
  loading: false,
  filter: "",
  showErrorModal: false
};

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  get viewData() {
    return {
      loading: this.state.loading,
      showErrorModal: this.state.showErrorModal,
      handleCloseErrorModal: this.handleCloseErrorModal,
      comments: this.state.comments,
      filter: this.state.filter,
      handleFilterChange: this.handleFilterChange,
      refresh: this.refresh
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    this.setState(initialState);
  }

  fetchData() {
    this.handleLoader(true);
    getComments()
      .then(result => {
        const { data } = result;
        this.data = data;
        this.setState({
          comments: data
        });
      })
      .catch(() => {
        this.setState({
          showErrorModal: true
        });
      })
      .finally(() => {
        this.handleLoader(false);
      });
  }

  handleLoader = loading => {
    this.setState({
      loading: loading
    });
  };

  refresh = () => {
    this.fetchData();
  };

  handleFilterChange = event => {
    const filter = get(event, "target.value", "");
    this.setState({ filter: filter });
    this.filterComments(filter.toUpperCase());
  };

  filterComments = filter => {
    const filtered = this.data.filter(
      c =>
        c.name.toUpperCase().includes(filter) ||
        c.email.toUpperCase().includes(filter) ||
        c.body.toUpperCase().includes(filter)
    );

    this.setState({ comments: filtered });
  };

  handleCloseErrorModal = () => {
    this.setState({
      showErrorModal: false
    });
  };

  render() {
    return <CommentsView data={this.viewData} />;
  }
}

export default CommentsContainer;
