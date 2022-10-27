export default {
  name: "featured",
  type: "document",
  title: "Featured Menu categories",
  fields: [
    {
      name: "name",
      title: "Featured Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurant",
      type: "array",
      title: "Restaurant",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
