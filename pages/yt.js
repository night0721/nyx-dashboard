import {useRouter} from "next/router";
import {useEffect} from "react";
export default function Youtube() {
  const page = useRouter();
  useEffect(() => {
    page.push("https://www.youtube.com/@night0721");
  }, []);
  return () => null;
}
