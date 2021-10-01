import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import collectionComponent from "./collection.component";

/*const mapStateToProps = (state) => ({
    isLoading:   !selectIsCollectionLoaded(state)
})
*/

const mapStateToProps = createStructuredSelector({
    isLoading: (state)=> !selectIsCollectionLoaded(state)
})
const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionComponent)

export default CollectionsContainer;