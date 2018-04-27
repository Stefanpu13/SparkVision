const BASE_URL = 'https://sparkvision.file.core.windows.net/sparkvision';
const SAS = '?sv=2017-07-29&ss=f&srt=sco&sp=rlc&se=2018-05-03T20:00:21Z&st=2018-04-27T12:00:21Z&spr=https&sig=xIwxVDKTVEX25TEE3TG0o42XnsC9r139PO8BrwXGIJw%3D';

export const AZURE_FILE_STORAGE = {
  BASE_URL,
  SAS
}

export const PRODUCTS_XML_URL = BASE_URL + '/products.xml' + SAS
