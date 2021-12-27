const fs = require("fs");
const path = require("path");
const uploadFile = require("./aws");

const testUpload = () => {
  const filePath = path.resolve(__dirname, "test-upload.png");
  const fileStream = fs.createReadStream(filePath);
  const now = new Date().toISOString();
  const fileName = `test-upload-${now}.png`;

  uploadFile(fileStream, fileName)
    .then((response) => {
      console.log("Enviando arquivo para o s3", { response });
    })
    .catch((err) => {
      console.log("Erro ao enviar arquivo para o s3", { err });
    });
};

testUpload()
