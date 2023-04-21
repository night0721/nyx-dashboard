import { useRouter } from "next/router";
import { useEffect } from "react";
export default function NYX() {
  const page = useRouter();
  useEffect(() => {
    page.push(
      "https://discord.com/oauth2/authorize?client_id=841338345665593397&permissions=4231314550&scope=bot%20applications.commands"
    );
  }, []);
  return () => null;
}
