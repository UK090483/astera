import { testProjection } from "../../__test__/queryTest";
import { linkProjection } from "./link.query";

describe("linkQuery", () => {
  it("should create Valid Query", async () => {
    const query = await testProjection(linkProjection());
    expect(query.error).toBeFalsy();
  });
});
