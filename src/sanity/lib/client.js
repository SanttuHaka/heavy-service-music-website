import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1tnyclu0",
  dataset: "production",
  apiVersion: "2023-12-06",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
