/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
  "/pet": {
    put: operations["updatePet"];
  };
};

export type components = {
  schemas: {
    Pet: {
      name: string;
    };
  };
};

export type operations = {
  updatePet: {
    responses: {
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": {
          name?: components["schemas"]["Pet"]["name"];
        };
      };
    };
  };
};

export type external = {};