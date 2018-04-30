const BASE_URL = 'https://sparkvision.blob.core.windows.net/sparkvision';
const SAS = '?sv=2017-07-29&ss=bf&srt=sco&sp=rl&se=2018-05-04T22:39:28Z&st=2018-04-29T14:39:28Z&spr=https&sig=oOBFYUuyTApnmMNLNBKzlP7VuqYgixs7NFzOPpF1B90%3D';

export const AZURE_FILE_STORAGE = {
  BASE_URL,
  SAS
};

export const PRODUCTS_XML_URL = BASE_URL + '/products.xml' + SAS;
