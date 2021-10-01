import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionsOverviewComponent from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverviewComponent);

export default CollectionsOverviewContainer;