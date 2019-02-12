import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.field("userType", { type: "UserType", nullable: false });
    t.string("ID");
    t.string("name");
    t.string("createdAt");
    t.string("email");
    t.int("age", { nullable: true });
  }
});
