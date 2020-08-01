const Helper = {
  getColor: (category) => {
    let colorClass;
    if (category.includes("noble gas")) {
      colorClass = "noblegas";
    } else if (category.includes("nonmetal")) {
      colorClass = "nonmetal";
    } else if (category.includes("actinide")) {
      colorClass = "actinide";
    } else if (category.includes("alkali metal")) {
      colorClass = "alkaliMetal";
    } else if (category.includes("alkaline earth metal")) {
      colorClass = "alkaliEarthMetal";
    } else if (category.includes("transition metal")) {
      colorClass = "transitionMetal";
    } else if (category.includes("metalloid")) {
      colorClass = "metalloid";
    } else if (category.includes("lanthanide")) {
      colorClass = "lanthanide";
    }
    return colorClass;
  },
};

export default Helper;
