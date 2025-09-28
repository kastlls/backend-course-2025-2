const date = "202202";

const url = new URL("NBUStatService/v1/statdirectory/res", "https://bank.gov.ua/");
url.searchParams.append("date", date);
url.searchParams.append("json", "");

console.log(url.toString());
