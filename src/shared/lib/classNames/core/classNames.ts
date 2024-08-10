type Mods = Record<string, boolean | string>;
type classNamesProps = string | Mods | string[];

export const classNames = (...props: classNamesProps[]): string => {
  const resultClasses: string[] = [];

  props.forEach((prop) => {
    if (typeof prop === 'string') {
      resultClasses.push(prop);
    } else if (Array.isArray(prop)) {
      resultClasses.push(...prop.filter((item) => typeof item === 'string'));
    } else if (typeof prop === 'object' && prop !== null) {
      resultClasses.push(...Object.entries(prop)
        .filter((item) => typeof item[1] === 'boolean'
          && item[1] && typeof item[0] === 'string'
          && item[0].length > 0)
        .map((item) => item[0]));
    }
  });

  return resultClasses.join(' ');
};
