

export default async function handler(request, res) {

  const classlist=[
    {
      "university": "Penn State",
      "class": "IST 256",
      "bottomImageText": "Penn State",
      "topImageText": "We Are",
      "alternateColor": false
    },
    {
      "university": "Penn State",
      "class": "IST 256",
      "bottomImageText": "Penn State",
      "topImageText": "We Are",
      "alternateColor": false
    },
    {
      "university": "Penn State",
      "class": "IST 256",
      "bottomImageText": "Penn State",
      "topImageText": "We Are",
      "alternateColor": false
    },
    {
      "university": "Penn State",
      "class": "IST 256",
      "bottomImageText": "Penn State",
      "topImageText": "We Are",
      "alternateColor": false
    }

  ];
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.json(classlist);
}
