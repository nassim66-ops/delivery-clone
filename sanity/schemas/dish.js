export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of dish",
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
      name: "price",
      type: "number",
      title: "Price of the Dish",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
  ],
};
