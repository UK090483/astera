import { testProjection } from "../__test__/queryTest";
import { navigationQuery } from "./navigation.query";

describe("Navigation", () => {
  it("should create Valid Query", async () => {
    const query = await testProjection(navigationQuery());
    expect(query.error).toBeFalsy();
  });
});
