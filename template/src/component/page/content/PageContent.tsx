import "./_page-content.scss";

import React from "react";
import classNames from "classnames";

interface PageContentProps {
  children: React.ReactNode;
  customClassName?: string;
}

function PageContent({children, customClassName}: PageContentProps) {
  return <main className={classNames("page-content", customClassName)}>{children}</main>;
}

export default PageContent;
