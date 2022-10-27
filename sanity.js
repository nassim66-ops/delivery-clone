// import sanityClient from "@sanity/client";
const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "myfoc4jy",
  dataset: "production",
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
