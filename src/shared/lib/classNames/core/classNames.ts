type Mods = Record<string, boolean | string>;
type classNamesProps = string | Mods | string[];

export const classNames = (...props: classNamesProps[]): string => {
  const resultClasses: string[] = [];

  props.forEach((prop) => {
    if (typeof prop === 'string') {
      resultClasses.push(prop);
    } else if (Array.isArray(prop)) {
      resultClasses.push(...prop.filter(Boolean));
    } else if (typeof prop === 'object' && prop !== null) {
      const keys = Object.keys(prop);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const value = prop[key];
        if (typeof value === 'boolean' && value) {
          resultClasses.push(key);
        } else if (typeof value === 'string') {
          resultClasses.push(value);
        }
      }
    }
  });

  return resultClasses.join(' ');
};
