export const getCategoryClass = (category: string) => {
  switch (category) {
    case "Food":
      return "bg-red-500 text-white";
    case "Rent":
      return "bg-blue-500 text-white";
    case "Shopping":
      return "bg-teal-500 text-white";
    case "Entertainment":
      return "bg-purple-500 text-black";
    case "Bill":
      return "bg-yellow-500 text-black";
    case "Unexpected":
      return "bg-lime-400 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export const setAmountColor = (amount: number) => {
  if (amount <= 50) {
    return "bg-green-100";
  } else if (amount <= 100) {
    return "bg-green-200";
  } else if (amount <= 200) {
    return "bg-green-300";
  } else if (amount <= 300) {
    return "bg-green-400";
  } else if (amount <= 400) {
    return "bg-green-500";
  } else {
    return "bg-green-600";
  }
};
