import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    // Mock data for now - replace with actual Sanity query
    const products = [
      {
        _id: "1",
        name: "1Kg AMAN Millet Flour",
        price: 3500,
        description:
          "Premium quality millet flour, naturally processed and chemical-free.",
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
          "Nutritious guineacorn pap powder, perfect for healthy meals.",
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
      {
        _id: "3",
        name: "200mls AMAN Avocado infused oil",
        price: 7000,
        description: "Pure avocado infused oil for skin and hair care.",
        image: {
          asset: {
            url: "/images/review1.jpg?height=400&width=400",
          },
        },
        slug: {
          current: "aman-avocado-oil-200ml",
        },
        inStock: true,
      },
      {
        _id: "4",
        name: "200mls AMAN Carrot Oil",
        price: 7000,
        description: "Natural carrot oil rich in vitamins and antioxidants.",
        image: {
          asset: {
            url: "/images/review1.jpg?height=400&width=400",
          },
        },
        slug: {
          current: "aman-carrot-oil-200ml",
        },
        inStock: true,
      },
    ];

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return products;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    });
  }
});
