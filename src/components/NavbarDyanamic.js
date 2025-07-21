import PropTypes from 'prop-types'
export default function NavbarDyanamic(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <a className="navbar-brand" href="#">{props.aboutText}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}


NavbarDyanamic.propTypes = {
    title:  PropTypes.string,
    aboutText: PropTypes.string
}
NavbarDyanamic.defaultProps = {
    title: 'Hello, world!',
};