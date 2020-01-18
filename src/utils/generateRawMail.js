/* eslint-disable no-useless-escape */
const generateRawMail = (address, title, template, fileName, attachment) => {
  let mail = 'From: 25sproutsanofi@gmail.com\n';
  mail += `To: ${address}\n`;
  mail += 'Bcc: 25sproutsanofi@gmail.com\n';
  mail += `Subject: ${title}\n`;
  mail += 'MIME-Version: 1.0\n';
  mail += 'Content-Type: multipart/mixed; boundary="NextPart"\n\n';

  mail += '--NextPart\n';
  mail += 'Content-Type: multipart/alternative; boundary="ContentPart"\n\n';

  mail += '--ContentPart\n';
  mail += 'Content-Type: text/html\n\n';

  mail += `${template}\n\n`;

  mail += '--ContentPart--\n';
  mail += '--NextPart\n';
  mail += `Content-Type: application/octet-stream; name=\"${fileName}\"\n`;
  mail += `Content-Disposition: attachment; filename=\"${fileName}\"\n`;
  mail += 'Content-Transfer-Encoding: base64\n';
  mail += `${attachment[0]}\n\n`;

  mail += '--NextPart\n';
  mail += `Content-Type: application/octet-stream; name=\"${fileName}\"\n`;
  mail += `Content-Disposition: attachment; filename=\"${fileName}\"\n`;
  mail += 'Content-Transfer-Encoding: base64\n';
  mail += `${attachment[1]}\n\n`;
  mail += '--NextPart--';
  return mail;
};

export default generateRawMail;
