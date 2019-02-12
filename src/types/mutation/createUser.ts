import { mutationType, arg } from "nexus";
import { data } from "data";
import uuid from "uuid/v4";

export const Mutation = mutationType({
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        input: arg({
          type: "createUserInput" as any,
          required: true
        })
      },
      resolve: (_, { input }) => {
        const ID = uuid();
        const newData = { ...input, ID, createdAt: Date.now().toString() };
        data.push();
        return newData;
      }
    });
  }
});
