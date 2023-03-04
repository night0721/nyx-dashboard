const {getItemNetworth} = require("skyhelper-networth");
const nbt = require("prismarine-nbt");
const parseNbt = require("util").promisify(nbt.parse);
async function decodeData(buffer) {
  const parsedNbt = await parseNbt(Buffer.from(buffer, "base64"));
  return nbt.simplify(parsedNbt);
}
export default async function handler(req, res) {
  if (req.method == "POST" || req.method == "GET" || req.method == "PUT") {
    if (req.body == "") {
      res.status(400).json({error: "No body was provided"});
      return;
    }
    console.log(req.body);
    let dat;
    try {
      dat = JSON.parse(req.body).ByteData || req.body.ByteData;
    } catch (e) {
      res.status(400).json({error: "ByteData is not a string or undefined"});
      return;
    }
    if (typeof dat !== "string" || typeof dat == "undefined") {
      res.status(400).json({error: "ByteData is not a string or undefined"});
      return;
    }
    try {
      const data = await getItemNetworth((await decodeData(dat)).i[0], {
        cache: true,
      });
      res.status(200).json(data);
    } catch {
      res.status(400).json({error: "Invalid ByteData"});
    }
  } else {
    res
      .status(400)
      .json({error: "This endpoint only accepts GET, POST and PUT requests"});
  }
}
