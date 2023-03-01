import {useRouter} from "next/router";
import {useEffect} from "react";
export default function discord() {
  const page = useRouter();
  useEffect(() => {
    page.push("http://discord.gg/SbQHChmGcp");
  }, []);
  return () => null;
}
