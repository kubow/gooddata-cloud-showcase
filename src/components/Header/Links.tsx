import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links: React.FC = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Dashboard
            </NavLink>
            <NavLink to={"/in"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Insight re-used
            </NavLink>
            <NavLink to={"/insight"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Insight custom
            </NavLink>
            <NavLink to={"/custom"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Custom visualization
            </NavLink>
        </>
    );
};

export default Links;
