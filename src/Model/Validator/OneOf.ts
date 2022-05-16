const oneOf = (supported: Array<any>) => (target: any, key: string) => {
  let currentValue: any = target[key];

  Object.defineProperty(target, key, {
    set: (value) => {
      if (!supported.includes(value)) {
        throw new Error(
          `Invalid value '${value}' for '${target.constructor.name}.${key}'`
        );
      }
      currentValue = value;
    },
    get: () => currentValue,
  });
};

export default oneOf;
