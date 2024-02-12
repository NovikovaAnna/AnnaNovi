import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import PropTypes from 'prop-types';
import React from 'react'; // Fragment можно импортировать напрямую

export default function Layout({ children, className }) {
    return (
        <>
            <Header />
            <main className={className}>
                {children}
            </main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
