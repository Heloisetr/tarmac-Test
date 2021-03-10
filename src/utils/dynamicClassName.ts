const dynamicClassName = (e: string) => {
  const className = [...[e]] || [e];
  return {
    add: (cn: string) => className.push(cn),
    build: () => className.join(' '),
  };
};

export default dynamicClassName;
