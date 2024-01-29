type InitialOptionType = {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit";
    day?: "numeric" | "2-digit";
    // Add other option properties as needed
  };

const initialOption: InitialOptionType = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};


type showdateType = (
    date: number,
    option?: InitialOptionType
  ) => string;
  
  export const showDate: showdateType = (
    date: number,
    option: InitialOptionType = initialOption
  ) => {
    return new Intl.DateTimeFormat("En-En", {
      ...option,
      timeZone: "Asia/Tehran",
    }).format(new Date(date || Date.now()));
  };