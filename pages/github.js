import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Github() {
  const page = useRouter();
  useEffect(() => {
    page.push("http://github.com/night0721");
  }, []);
  return () => null;
}
