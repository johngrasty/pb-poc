/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      marginBottom: 5,
      display: "flex",
      alignItems: "center",
      variant: "styles.header",
    }}
  >
    <Link
      to="/"
      sx={{
        pt: 3,
        pl: 3,
        textDecoration: "none",
        variant: "styles.navlink",
      }}
    >
      <h1>{siteTitle}</h1>
    </Link>

    <div sx={{ mx: "auto" }} />
    <Link
      to="/blog"
      sx={{
        variant: "styles.navlink",
        py: 2,
        px: 4,
      }}
    >
      Blog
    </Link>
    <Link
      to="/about"
      sx={{
        variant: "styles.navlink",
        py: 2,
        px: 3,
      }}
    >
      About
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
