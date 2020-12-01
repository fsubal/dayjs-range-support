import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import rangeSupport from "../src";

dayjs.extend(isSameOrBefore);
dayjs.extend(rangeSupport);

describe("rangeSupport", () => {
  describe("with isSameOrBefore", () => {
    test("excludeEnd: false", () => {
      expect(
        Array.from(
          dayjs.range("2020-12-01", "2020-12-31", {
            excludeEnd: false,
          })
        )
      ).toHaveLength(31);
    });

    test("excludeEnd: true", () => {
      expect(
        Array.from(
          dayjs.range("2020-12-01", "2020-12-31", {
            excludeEnd: true,
          })
        )
      ).toHaveLength(30);
    });

    test("step: 2 day", () => {
      expect(
        Array.from(
          dayjs.range("2020-12-01", "2020-12-31", {
            step: [2, "day"],
            excludeEnd: false,
          })
        )
      ).toHaveLength(16);
    });
  });
});
