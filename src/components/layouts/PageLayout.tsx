import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
  }: Props) => {
    return (
        <>
        {typeof global!="undefined"?
            <Nav _site={global} />
            :''}
                {children}
        {typeof global!="undefined"?
            <Footer footer={global} />
            :''}
        </>
    );
  };

export default PageLayout;
  