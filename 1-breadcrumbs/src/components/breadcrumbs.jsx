import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  //   console.log(pathnames);

  let breadcrumbpath = "";
  return (
    <div className="breadcrumb">
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadcrumbpath = breadcrumbpath + `/${name}`;

        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbpath}>/{name}</span>
        ) : (
          <span key={breadcrumbpath}>
            /<Link to={breadcrumbpath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
