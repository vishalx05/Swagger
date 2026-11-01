const ProductApiDoc = {
  "/product": {
    get: {
      summary: "Fetchh all the products",
      parameters: [
        {
          in: "query",
          name: "page",
          default: 1,
          schema: { type: "number" },
        },
        {
          in: "query",
          name: "limit",
          default: 12,
          schema: { type: "number" },
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "applicaion/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    title: { type: "string" },
                    price: { type: "number" },
                    discount: { type: "number" },
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
    post: {
      summary: "Add new Product",

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                price: { type: "number" },
                discount: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "number" },
                  title: { type: "string" },
                  price: { type: "number" },
                  discount: { type: "number" },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Ïnternal Server error" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/product/{id}": {
    put: {
      summary: "update a Product by id",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                price: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  title: { type: "string" },
                  price: { type: "number" },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Ïnternal Server error" },
                },
              },
            },
          },
        },
        404: {
          description: "Not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Not found" },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      summary: "delete a Product by id",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  title: { type: "string" },
                  price: { type: "number" },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Ïnternal Server error" },
                },
              },
            },
          },
        },
        404: {
          description: "Not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Not found" },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default ProductApiDoc;
