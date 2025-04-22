import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo }  from '@components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Hi, SAHABAT SANGGAR" headingAccent="PREMIUM.">
      <p>I'm a full-stack software engineer with a passion for building scalable systems and exceptional user experiences.</p>
      <p>This site is currently a work in progress, but you can check out the navigation links above.</p>
      <p>Features coming soon:</p>
      <ul>
        <li>🇲🇨border-box; line-height: 1.1; margin-bottom: 0.2rem; margin-top: 0px;"><a href="https://sfile.mobi/87LVkhr6zCn"><br /></a></div><div style="box-sizing: border-box; line-height: 1.1; margin-bottom: 0.2rem; margin-top: 0px;"><a href="https://sfile.mobi/87LVkhr6zCn"><b>YOUTUBE</b>&nbsp;</a></div><div style="box-sizing: border-box; line-height: 1.1; margin-bottom: 0.2rem; margin-top: 0px;"><a href="https://sfile.mobi/87LVkhr6zCn"><br /></a></div><div style="box-sizing: border-box; line-height: 1.1; margin-bottom: 0.2rem; margin-top: 0px;"><b><a href="https://sfile.mobi/87LVkhr6zCn">TURBO SUPER / PREM</a></b></div><div style="box-sizing: border-box; line-height: 1.1; margin-bottom: 0.2rem; margin-top: 0px;"><b><a href="https://sfile.mobi/87LVkhr6zCn">🇲🇨</li>
        <li>Additional projects</li>
        <li>Sorting features on skills page</li>
        <li>A few more themes beyond "light" and "dark"</li>
        <li>Site logo and improved styles</li>
      </ul>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Home" />
);

export default IndexPage;
