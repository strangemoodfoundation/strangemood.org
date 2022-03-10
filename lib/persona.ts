
export function getPersonaPrimaryColor(persona: string): string {
   switch (persona) {
      case "maker":
         return "indigo";
      case "gamer":
         return "rose";
      case "creator":
         return "emerald";
      default:
         return "black";
   }
}