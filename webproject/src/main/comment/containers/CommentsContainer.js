//GLOBAL imports
import React, { Component } from "react";
import get from "lodash/get";
//LOCAL imports
import CommentsView from "../views/CommentsView";
import { getComments } from "../../../common/api/services";

const initialState = {
  source: [],
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
      source: this.state.source,
      filter: this.state.filter,
      handleFilterChange: this.handleFilterChange,
      refresh: this.refresh
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.handleLoader(true);
    getComments()
      .then(result => {
        const { data } = result;
        this.setState({ source: data });
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
    this.setState({ loading });
  };

  refresh = () => {
    this.setState(initialState);
    this.fetchData();
  };

  handleFilterChange = event => {
    const filter = get(event, "target.value", "");
    this.setState({ filter });
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
