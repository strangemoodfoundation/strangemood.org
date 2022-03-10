
export function getPersonaPrimaryColor(persona: string): string {
   switch (persona) {
      case "maker":
         return "indigo";
      case "gamer":
         return "red";
      case "creator":
         return "green";
      default:
         return "black";
   }
}