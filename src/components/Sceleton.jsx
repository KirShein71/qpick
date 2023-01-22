import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => (
    <ContentLoader 
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="90" cy="61" r="54" /> 
        <rect x="41" y="143" rx="0" ry="0" width="102" height="18" />
    </ContentLoader>
  )
  
  export default Sceleton;