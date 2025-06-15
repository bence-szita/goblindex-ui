export default function numberToGold(num: number): string {
  const [gold, decimal] = num.toString().split(".");

  const goldSubString = Number(gold) !== 0 || !decimal ? `${gold}g` : "";

  if (!decimal) {
    return goldSubString;
  }

  const silver = decimal.substring(0, 2);
  const copper = decimal.substring(2, 4);

  const silverSubString = silver && Number(silver) > 0 ? `${silver}s` : "";
  const copperSubString = copper && Number(copper) > 0 ? `${copper}c` : "";

  return [goldSubString, silverSubString, copperSubString].filter((string) => !!string).join(" ");
}
