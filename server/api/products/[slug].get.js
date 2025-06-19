import { defineEventHandler, getRouterParam, createError } from "h3";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");

  try {
    // Mock data for now - replace with actual Sanity query
    const products = [
      {
        _id: "1",
        name: "1Kg AMAN Millet Flour",
        price: 3500,
        description:
          "Premium quality millet flour, naturally processed and chemical-free. Perfect for making healthy meals and baked goods. Rich in nutrients and free from artificial additives.",
        image: {
          asset: {
            url: "/images/review1.jpg?height=400&width=400",
          },
        },
        slug: {
          current: "aman-millet-flour-1kg",
        },
        inStock: true,
      },
      {
        _id: "2",
        name: "1kg Guineacorn pap Powder",
        price: 7000,
        description:
          "Nutritious guineacorn pap powder, perfect for healthy meals. Made from carefully selected guineacorn and processed using traditional methods to preserve all natural nutrients.",
        image: {
          asset: {
            url: "/images/review1.jpg?height=400&width=400",
          },
        },
        slug: {
          current: "guineacorn-pap-powder-1kg",
        },
        inStock: true,
      },
    ];

    const product = products.find((p) => p.slug.current === slug);

    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
      });
    }

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return product;
  } catch (error) {
    if (error.statusCode === 404) {
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch product",
    });
  }
});
