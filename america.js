const URI = "https://www.americatv.com.pe/noticias/panel-publicitario";
var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
const URL = window.location.href;
const province = URL.split("?province=")[1]
document.getElementById("img-province").src="img/"+province+".jpeg"

async function init() {
  await getUser();
  console.log(content)
  content.style.display = "none";
  setTimeout(() => {
    content2.style.display = "block";
  }, 0);
  setTimeout(() => {
    content.style.display = "block";
    content2.style.display = "none";
  }, 3000);
  
}

init();


async function getUser(){
  let options = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }), //default is a=>a
    tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"],
  };

  const resp = await axios.get(URI);
  const xmlData = resp.data;

  const jsonOBJ = parser.parse(xmlData, options, true);

  if (jsonOBJ) {
    // America
    const dataItem1  = jsonOBJ.rss.channel.item1;
    
    document.getElementById('title1').innerHTML = dataItem1.titulo1;
    document.getElementById('title2').innerHTML = dataItem1.titulo2;
    document.getElementById('title3').innerHTML = dataItem1.titulo3;
  }
}