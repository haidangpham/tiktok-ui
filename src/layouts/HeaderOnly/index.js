import Header from '../components/Header';
import Proptype from 'prop-types';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.proptype = {
    children: Proptype.node.isRequired,
};
export default HeaderOnly;
