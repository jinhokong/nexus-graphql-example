import { inputObjectType } from "nexus";

export const createUserInput = inputObjectType({
  name: "createUserInput",
  definition(t) {
    t.string("name", { required: true });
    t.string("email", { required: true });
    t.field("userType", { type: "UserType", nullable: false });
    t.int("age");
  }
});
