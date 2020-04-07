require("./src/styles/global.css");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location

  // List of routes to not scroll to top
  const scrollIgnoreRoutes = []

  // If the pathname is not included, scroll to top
  if (scrollIgnoreRoutes.indexOf(pathname) === -1) {
    window.scrollTo(0, 0)
  }

  return false
}
