import React from 'react';
import { Link, Route } from 'react-router-dom';

const Category = ({ match }) => {
    // shoes tracks  /category/shoes
    return(
        <div>
            <h3>Category</h3>
            <ul>
                <li>
                    {/* www.whatever.com/category/shoes */}
                    <Link to={`${match.url}/shoes`}>Shoes</Link>
                </li>
                <li>
                    <Link to={`${match.url}/boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${match.url}/sandals`}>Sandals</Link>
                </li>
            </ul>
            <Route path={`${match.path}/:name`}
                render = { ({match}) => (
                    <div>
                    <h4>{match.params.name}</h4>
                    </div>)} >
            </Route>
        </div>
    )
}

export default Category;