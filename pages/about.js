import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return <div>About</div>;
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
