type Variants = Record<string, string | undefined>;

export function cva(
  base: string,
  variants?: Variants
): (options?: { [key: string]: boolean | string }) => string {
  return (options = {}) => {
    let classes = base;

    if (variants) {
      for (const key in options) {
        if (options[key] && variants[key]) {
          classes += ` ${variants[key]}`;
        }
      }
    }

    return classes;
  };
}