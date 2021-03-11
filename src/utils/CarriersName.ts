function getCarriersName(airlinesData: any[]): string[] {
  let airlinesName: string[] = [];

  airlinesData.map((name) => {
    if (name.airline_name) {
      airlinesName.push(name.airline_name);
    }
    return null;
  });

  return airlinesName;
}

export default getCarriersName;