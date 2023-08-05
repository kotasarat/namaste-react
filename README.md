# Namaste React 🚀

# Parcel

- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistant Hashing
- Code Splittling
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

// React Element
const TitleComponent = function () {
return (

<h1 className="head" tabIndex="5">
Namaste React Title Component using JSX
</h1>
);
};

// React Functional Component & Component Composition
const HeadingComponent = () => {
return (

<div id="container">
{TitleComponent()}
<TitleComponent></TitleComponent>
<h1>Namaste React Functional Component and Composition</h1>;
</div>
);
};

# Food Ordering App - Namste Food

- Header
  - Logo
  - Nav Items
- Body
- Search
- RestaurantContainer

- RestaurantCard
  - Img
    - Name of Res, Star Rating, cuisine, delery tie
- Footer
- Copyright
- Links
- Address
- Contact
