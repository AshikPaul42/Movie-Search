import React from 'react';

function HeaderSection() {
  return (
    <div className="HeaderSection">
        <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="https://www.linkedin.com/in/ashik-paul-2ab793130/">Contact</a>
          </div>
          <div className="col-4 text-center">
            <h3 className="font-weight-normal blog-header-logo text-dark">The Blah Site</h3>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center"></div>
        </div>
      </header>
    </div>
  );
}

export default HeaderSection;