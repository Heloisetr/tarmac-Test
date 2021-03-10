function getCarriersName(airlinesData: any[]): string[] {
  let airlinesName: string[] = [];

  airlinesData.map((name) => {
    airlinesName.push(name.airline_name);
    
    return null;
  });

  return airlinesName;
}

export default getCarriersName;