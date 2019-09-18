//GLOBAL imports
import React, { Component } from "react";
//LOCAL imports
import TabPanelView from "./TabPanelView";
import ErrorModalView from "./ErrorModalView";
import { Loader } from "../../../common/components";

class CommentsView extends Component {
  render() {
    const { data } = this.props;
    return (
      <Loader loading={data.loading}>
        <ErrorModalView
          open={data.showErrorModal}
          handleClose={data.handleCloseErrorModal}
          header={"OOPS! ERROR OCCURED"}
          text={
            "Something went wrong when fetching data. Please try again later (F5 or click Refresh)."
          }
        />
        <TabPanelView
          filteredComments={data.filteredComments}
          allComments={data.allComments}
          filter={data.filter}
          handleFilterChange={data.handleFilterChange}
          refresh={data.refresh}
        />
      </Loader>
    );
  }
}

export default CommentsView;
