export const mergeClassNames = (baseClass: string, extraClass: string = ''): string => {
  const newClassesName = [...new Set([...baseClass.split(' '), ...extraClass.split(' ')])];

  return newClassesName.join(' ').trim();
};

// export const mergeClassNames = (...classes: (string | undefined)[]): string => {
//   return [...new Set(classes)].filter(Boolean).join(' ');
// };
