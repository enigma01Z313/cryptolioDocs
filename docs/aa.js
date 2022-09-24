import React from "react";
import Layout from "@theme/Layout";
import Highlight from "../components/parts/Hightlight";

export default function MyReactPage() {
  return (
    <Layout>
      This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
