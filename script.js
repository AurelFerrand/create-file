const htmlFile = new File(
  [
    `<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script src="script.js"></script>
</body>


</html>`,
  ],
  "index.html",
  {
    type: "text/plain",
  }
);

const scriptFile = new File([""], "script.js", {
  type: "text/plain",
});

const jsFile = (fileName) => {
  const link = document.createElement("a");
  const url = URL.createObjectURL(fileName);

  link.href = url;
  link.download = fileName.name;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

const download = () => {
  const selection = document.getElementById("script");

  if (selection.checked) {
    jsFile(htmlFile);
    jsFile(scriptFile);
  } else {
    jsFile(htmlFile);
  }
};
