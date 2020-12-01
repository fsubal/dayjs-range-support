# dayjs-range-support

Add `dayjs.range()` to yield each day between some period

```
npm install -S @fsubal/dayjs-range-support
```

```
yarn add @fsubal/dayjs-range-support
```

## Usage

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
