import { queryType, stringArg } from "nexus";

import { data } from "data";

export const Query = queryType({
  definition(t) {
    t.field("version", {
      type: "String",
      resolve: () => `0.0.1`
    });
    t.field("user", {
      type: "User",
      args: {
        ID: stringArg({
          required: true
        })
      },
      resolve: (_, { ID }) => data.find((i) => i.ID === ID) as any
    });
    t.list.field("users", {
      type: "User",
      resolve: () => data as any
    });
  }
});
