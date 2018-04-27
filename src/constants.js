const BASE_URL = 'https://sparkvision.file.core.windows.net/sparkvision';
const SAS = '?sv=2017-07-29&ss=f&srt=sco&sp=r&se=2018-04-29T15:50:45Z&st=2018-04-26T07:50:45Z&spr=https&sig=rXvF%2BN%2F7195rZkjrwGlBj%2Bhr9FMkQsLPxfQvdr%2B7Cpg%3D';

export const AZURE_FILE_STORAGE = {
    BASE_URL,
    SAS,

}

export const PRODUCTS_XML_URL = BASE_URL + '/products.xml' + SAS
