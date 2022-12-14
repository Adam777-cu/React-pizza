import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="137" cy="147" r="125" />
    <rect x="231" y="313" rx="0" ry="0" width="3" height="0" />
    <rect x="87" y="323" rx="0" ry="0" width="0" height="2" />
    <rect x="5" y="241" rx="0" ry="0" width="1" height="1" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="21" />
    <rect x="0" y="344" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="453" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
