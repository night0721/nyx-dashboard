const {getItemNetworth} = require("skyhelper-networth");
const nbt = require("prismarine-nbt");
const parseNbt = require("util").promisify(nbt.parse);
async function decodeData(buffer) {
  const parsedNbt = await parseNbt(Buffer.from(buffer, "base64"));
  return nbt.simplify(parsedNbt);
}
let dat;
export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      dat = JSON.parse(req.body).ByteData;
    } catch (e) {
      dat = req.body.ByteData;
    }
    if (dat == undefined)
      res.status(400).json({error: "ByteData is undefined"});
    const data = await getItemNetworth((await decodeData(dat)).i[0], {
      cache: true,
    });
    res.status(200).json(data);
  } else {
    res.status(400).json({error: "This endpoint only accepts GET requests"});
  }
}
