import {useRouter} from "next/router";
import {useEffect} from "react";
export default function Youtube() {
  const page = useRouter();
  useEffect(() => {
    page.push("http://youtube.com/Kirito01");
  }, []);
  return () => null;
}
