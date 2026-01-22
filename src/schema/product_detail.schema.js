import mongoose from "mongoose";

const AttributeOptionSchema = new mongoose.Schema(
  {
    title: String,
    badge: String,

    label: String,
    subLabel: String,
    value: String,
    image: String,
  },
  { _id: false },
);

AttributeOptionSchema.add({
  items: [AttributeOptionSchema],
});

const AttributeSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  layout: { type: String, required: true },
  config: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
  },
  options: [AttributeOptionSchema],
});

const AccordionContentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: [
        "section",
        "text",
        "dataGrid",
        "iconBlock",
        "iconGrid",
        "carousel",
        "custom",
      ],
    },

    title: String,
    icon: String,

    text: String,
    variant: String,

    // IN CUSTOM COMPONENT OR CAROUSEL
    customComponent: String,
    customData: String,

    props: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
    },

    data: [[String]],
  },
  { _id: false },
);

const AccordionItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isOpen: { type: Boolean, default: false },
    content: [AccordionContentSchema],
  },
  { _id: false },
);

const ColorVariantSchema = new mongoose.Schema(
  {
    label: String,
    color: String,
  },
  { _id: false },
);

const productDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgSrc: { type: String, required: true },
  imageTrack: [String],
  rating: String,
  price: {
    discount: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
  },
  variants: {
    metals: [String],
    colors: [ColorVariantSchema],
  },
  attributes: [AttributeSectionSchema],
  accordions: [AccordionItemSchema],
});

const Product = mongoose.model("product", productDetailSchema);
export default Product;
