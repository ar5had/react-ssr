const React = require('react');
const Link = require('react-router').Link;
const { connect } = require('react-redux');

const Layout = React.createClass({
    _handleClick: function(){
        alert();
    },
    render: function(){
        const custom = this.props.custom;
        return(
            <html>
                <head>
                    <title>{custom.title}</title>
                    <link rel='stylesheet' href='/styles.css' />
                </head>
                <body>
                    <div>
                        <h1>{custom.title}</h1>
                        <button onClick={this._handleClick}>Click Me</button>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                        </ul>
                    </div>
                    { this.props.children }
                    <script dangerouslySetInnerHTML={{
                        __html : `window.PROPS = ${JSON.stringify(custom)}`
                    }} />
                    <script src='/bundle.js' />
                </body>
            </html>
        )
    }
});

const mapStateToProps = state => ({custom: state});

module.exports = connect(mapStateToProps)(Layout);