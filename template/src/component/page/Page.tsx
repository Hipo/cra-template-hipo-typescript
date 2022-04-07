import "./_page.scss";

import React, {useEffect} from "react";
import classNames from "classnames";

import PageHeader from "./header/PageHeader";
import PageFooter from "./footer/PageFooter";

interface PageProps {
  children: React.ReactNode;
  customClassName?: string;
  title: string;
}

function Page({children, customClassName, title}: PageProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className={classNames("page", customClassName)}>
      <PageHeader />

      {children}

      <PageFooter />
    </div>
  );
}

export default Page;
