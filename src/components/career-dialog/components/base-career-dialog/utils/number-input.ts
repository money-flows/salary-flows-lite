export const transform = {
  input: (value: number) => (isNaN(value) ? "0" : value.toString()),
  output: (e: React.ChangeEvent<HTMLInputElement>) => {
    const output = parseInt(e.target.value, 10);
    return isNaN(output) ? 0 : output;
  },
};
