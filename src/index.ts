import type dayjs from "dayjs";
import type {} from "dayjs/plugin/isSameOrBefore";

interface RangeOptions {
  step?: Parameters<dayjs.Dayjs["add"]>;
  excludeEnd?: boolean;
}

declare module "dayjs" {
  export function range(
    from: dayjs.ConfigType,
    to: dayjs.ConfigType,
    rangeOption?: RangeOptions
  ): Generator<dayjs.Dayjs, void, unknown>;
}

const plugin: dayjs.PluginFunc = (_options, dayjsClass, dayjsFactory) => {
  dayjsFactory.range = function* (
    from: dayjs.ConfigType,
    to: dayjs.ConfigType,
    rangeOption?: RangeOptions
  ) {
    const option: Required<RangeOptions> = {
      step: [1, "day"],
      excludeEnd: false,
      ...rangeOption,
    };

    if (option.excludeEnd === false) {
      if (!("isSameOrBefore" in dayjsClass.prototype)) {
        throw new TypeError(
          "dayjs/plugin/isSameOrBefore must be applied when { excludeEnd: false }"
        );
      }
    }

    let current = dayjsFactory(from);

    while (
      option.excludeEnd ? current.isBefore(to) : current.isSameOrBefore(to)
    ) {
      yield current;
      current = current.add(...option.step);
    }
  };
};

export default plugin;
