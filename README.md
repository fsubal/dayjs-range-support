# dayjs-range-support

Add `dayjs.range()` to yield each day between some period

```
npm install -S @fsubal/dayjs-range-support
```

```
yarn add @fsubal/dayjs-range-support
```

## Usage

`dayjs.range()` returns a **generator** (not `dayjs.Dayjs[]`)!

```ts
Array.from(dayjs.range('2020-12-01', '2020-12-31'))
[...dayjs.range('2020-12-01', '2020-12-31')]

for (const day of dayjs.range('2020-12-01', '2020-12-31')) {
  ...
}
```

```ts
dayjs.range("2020-12-01", "2020-12-12", {
  step: [2, "day"],
});
```

## Options

`dayjs.range()` accepts options as the 3rd argument.

### `excludeEnd`: boolean (optional)

Whether to exclude the last date from range.

### `step`: [number, string] (optional)

Step between each date. Accepts the same type as `dayjs.add()` ( For example, `[2, 'day']` ).
