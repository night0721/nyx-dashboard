const {getItemNetworth} = require("skyhelper-networth");
const nbt = require("prismarine-nbt");
const parseNbt = require("util").promisify(nbt.parse);
async function decodeData(buffer) {
  const parsedNbt = await parseNbt(Buffer.from(buffer, "base64"));
  return nbt.simplify(parsedNbt);
}

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const {ByteData} = JSON.parse(req.body);
      if (ByteData == undefined)
        res.status(400).json({error: "ByteData is undefined"});
    } catch (e) {
      const {ByteData} = req.body;
      if (ByteData == undefined)
        res.status(400).json({error: "ByteData is undefined"});
    }
    const data = await getItemNetworth((await decodeData(ByteData)).i[0], {
      cache: true,
    });
    res.status(200).json(data);
  } else {
    res.status(400).json({error: "This endpoint only accepts GET requests"});
  }
}
